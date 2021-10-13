import { create } from "./BaseService";

const http = create(true);


// Movie
export const getMovies = (id) => {
  return http.get(`/movie/${id}`)
}

export function popularMovies() {
	return http.get("/movie/popular");
}

export function upcomingMovies() {
  return http.get('/movie/upcoming')
}

export function topRatedMovies() {
  return http.get("/movie/top_rated")
}
export function getMovieVideo(id) {
  return http.get(`/movie/${id}/videos`)
}

export function getSocialIdsMovie(id) {
  return http.get(`/movie/${id}/external_ids`)
}

export function getMovieCast(id) {
  return http.get(`/movie/${id}/credits`)
}


// TV Shows
export function getTVShow(id) {
  return http.get(`/tv/${id}`)
}

export function popularTVShows() {
  return http.get('/tv/popular')
}

export function topRatedTVShows() {
  return http.get('/tv/top_rated')
}

export function getSocialIdsTV(id) {
  return http.get(`/tv/${id}/external_ids`)
}

export function getTVCast(id) {
  return http.get(`/tv/${id}/credits`)
}

export function onTheAirShows() {
  return http.get("/tv/on_the_air")
}

// People
export function popularPeople() {
  return http.get('/person/popular')
}

export function getPersonDetail(id) {
  return http.get(`/person/${id}`)
}

export function getSocialIdsPerson(id) {
  return http.get(`/person/${id}/external_ids`)
}

export function getPersonCredits(id) {
  return http.get(`/person/${id}/combined_credits`)
}


// Search
export function searchInfo(query) {
  return http.get('/search/movie', { params: { query: query } })
}