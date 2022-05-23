/* Services */
import { postData } from "../services/Api";

const Logout = async () => {
    await postData("logout");
    window.location.reload();
};

export default Logout;
