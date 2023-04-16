import Axios from "./axios";

export const GetAllEventsApi = () => Axios.get("/event").then((res) => res.data);

export const PostLoginApi = (data: any) =>
  Axios.post("/login", data).then((res) => res.data);
