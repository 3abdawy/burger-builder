import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-dc3b0.firebaseio.com/"
});

export default instance;