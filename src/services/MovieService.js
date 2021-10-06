import { create } from "./BaseService";

const http = create(true);

export const getMovies = (id) => {
  return http.get(`/movie/${id}`)
}

export function popularMovies() {
	return http.get("/movie/popular");
}

export function topRatedMovies() {
  return http.get("/movie/top_rated")
}

export function popularTVShows() {
  return http.get('/tv/popular')
}

export function topRatedTVShows() {
  return http.get('/tv/top_rated')
}

export function popularPeople() {
  return http.get('/person/popular')
}

export function getMovieVideo(id) {
  return http.get(`/movie/${id}/videos`)
}

export function getSocialIds(id) {
  return http.get(`/movie/${id}/external_ids`)
}

export function getCast(id) {
  return http.get(`/movie/${id}/credits`)
}