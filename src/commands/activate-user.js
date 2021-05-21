import CacheState from "../redux/states/cache";
import moment from "moment";

export default function activateUser(id) {

    var data = CacheState.get().demoData || [];

    var index = data.findIndex((item, index) => item.id === id);

    if (index >= 0) {
        data[index].active = true;
    }
    CacheState.set({ demoData: data });
    return true;
}
