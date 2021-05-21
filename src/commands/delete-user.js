import CacheState from "../redux/states/cache";
import moment from "moment";

export default function deleteUser(id) {

    var data = CacheState.get().demoData || [];

    data = data.filter((item, index) => item.id !== id);

    CacheState.set({ demoData: data });
    return true;
}
