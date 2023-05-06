import Axios from "./axios";

export const GetAllEventsApi = () =>
  Axios.get("/event").then((res) => res.data);

export const PostLoginApi = (data: any) =>
  Axios.post("/login", data).then((res) => res.data);

export const PostRegisterApi = (data: any) =>
  Axios.post("/register", data).then((res) => res.data);

export const GetTodoApi = () => Axios.get("/todo").then((res) => res.data);

export const UpdateTodoApi = ({ id, data }: { id: string; data: any }) =>
  Axios.put(`/todo/${id}`, data).then((res) => res.data);

export const DeleteTodoApi = (id: string) =>
  Axios.delete(`/todo/${id}`).then((res) => res.data);

export const CreateTodoApi = (data: any) =>
  Axios.post("/todo", data).then((res) => res.data);

export const CreateEventApi = (data: any) =>
  Axios.post("/event", data).then((res) => res.data);

export const DeleteEventApi = (id: string) =>
  Axios.delete(`/event/${id}`).then((res) => res.data);

export const UpdateEventApi = ({ id, data }: { id: string; data: any }) =>
  Axios.put(`/event/${id}`, data).then((res) => res.data);

export const GetProfileApi = () => Axios.get(`/me`).then((res) => res.data);

export const GetTimeLineApi = (timeline: string) =>
  Axios.get(`/timeline?date=${timeline}`).then((res) => res.data);

export const PostTimeLineApi = (data: any) =>
  Axios.post(`/timeline`, data).then((res) => res.data);
