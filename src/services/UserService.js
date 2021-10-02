import { create } from "./BaseService";

const http = create();

export const getCurrentUser = () => {
  return http.get("/users/me")
}

export const createUser = (user) => {
  return http.post('/sign-up', user)
}