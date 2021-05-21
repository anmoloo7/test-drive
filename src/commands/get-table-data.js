import CacheState from "../redux/states/cache";
import moment from "moment";

export default function getTableData(filters = {}) {

    var data = CacheState.get().demoData || [];

    if (filters.search) {
        var query = filters.search.toLowerCase();
        console.log("query ", query);
        data = data.filter((item, index) => {
            if (item.first_name?.toLowerCase().includes(query)) {
                return true;
            } else if (item.last_name?.toLowerCase().includes(query)) {
                return true;
            } else if (item.email?.toLowerCase().includes(query)) {
                return true;
            } else if (item.last_login?.toLowerCase().includes(query)) {
                return true;
            } else if (item.payment_date?.toLowerCase().includes(query)) {
                return true;
            } else {
                return false;
            }
        });
    }

    if (filters.payment_status) {
        data = data.filter((item, index) => item.payment_status === filters.payment_status);
    }

    if (filters.active) {
        data = data.filter((item, index) => item.active === true);
    }
    if (filters.active === false) {
        data = data.filter((item, index) => item.active == false);
    }


    if (["first_name", "last_name"].includes(filters.sortBy)) {
        data = data.sort((a, b) => a[filters.sortBy] - b[filters.sortBy]);
    }
    if (["payment_date", "last_login"].includes(filters.sortBy)) {
        data = data.sort((a, b) => compareDate(a[filters.sortBy], b[filters.sortBy]));
    }


    var page = filters.page || 1;
    var per_page = filters.per_page || 10;
    var total = data.length;
    data = paginate(data, page, per_page);

    var pagination = {
        page: page,
        per_page: per_page,
        prev: page === 1 ? null : page - 1,
        next: total - page * per_page > 0 ? page + 1 : null,
        current: data.length,
        total: total
    };

    return { data, pagination };
}

function compareDate(dateTimeA, dateTimeB) {
    var momentA = moment(dateTimeA, "DD/MM/YYYY");
    var momentB = moment(dateTimeB, "DD/MM/YYYY");
    if (momentA < momentB) return 1;
    else if (momentA > momentB) return -1;
    else return 0;
}

function paginate(array, page_number, page_size) {
    console.log("array received for pagination", array);
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}