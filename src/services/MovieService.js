import { create } from "./BaseService";

const http = create(true);

export const getMovies = (id) => {
  return http.get(`/movie/${id}`)
}



