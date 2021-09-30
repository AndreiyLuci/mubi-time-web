import { create } from "./BaseService";

const http = create();

export const login = (email, password) => {
  return http.post("/login", { email, password });
};
