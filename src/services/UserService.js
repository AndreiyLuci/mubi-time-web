import { create } from "./BaseService";

const http = create();

export const getCurrentUser = () => {
  return http.get("/users/me")
}

export const createUser = (user) => {
  return http.post('/sign-up', user)
}

export const editUser = (id, user) => {
  return http.post(`/users/${id}/edit-profile`, user)
}


// favs
export const markMovieAsFav = (movieId) => {
  return http.post(`/movies/${movieId}/fav`);
}

export const getMovieFav = (movieId) => {
  return http.get(`/movies/${movieId}/fav`);
}

export const markTVAsFav = (TVShowId) => {
  return http.post(`/tvshows/${TVShowId}/fav`);
}

export const getTVfav = (TVShowId) => {
  return http.get(`/tvshows/${TVShowId}/fav`);
}