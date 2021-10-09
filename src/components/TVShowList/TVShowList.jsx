import { useEffect, useState } from "react";
import { popularTVShows, topRatedTVShows, onTheAirShows } from "../../services/MovieService";
import Loader from "react-loader-spinner";
import TVShowCard from "../TVShowCard/TVShowCard";
import "./TVShowList.css";

export default function MovieList() {
  const pathname = window.location.pathname;
  const [TVShows, setTVShows] = useState();
  const [error, setError] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(pathname);

  useEffect(() => {
    setCurrentUrl(pathname);
  }, [pathname]);

  useEffect(() => {
    if (currentUrl === '/tv-shows/popular') {
      popularTVShows()
      .then((TVShow) => {
        setTVShows(TVShow.results);
      })
      .catch(() => setError(true))
    } else if (currentUrl === '/tv-shows/top-rated') {
      topRatedTVShows()
      .then((TVShow) => {
        setTVShows(TVShow.results);
      })
      .catch(() => setError(true));
    } else if (currentUrl === '/tv-shows/on-the-air') {
      onTheAirShows()
      .then((TVShow) => {
        setTVShows(TVShow.results);
      })
      .catch(() => setError(true));
    }
  }, [currentUrl]);

  if (error) {
    return <h2>😞 There was an error, retry in a few minutes 😞</h2>;
  }

  if (!TVShows) {
    return (
      <div>
        <Loader
          type="MutatingDots"
          color="rgb(255, 222, 89)"
          secondaryColor="rgb(54, 54, 54)"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  return (
    <div id="MovieList" className="MovieList ">
      <h2 className="Movielist-heading">
      {currentUrl === "/tv-shows/popular"
          ? "Popular TV Shows"
          : currentUrl === "/tv-shows/top-rated"
          ? "Top Rated TV Shows"
          : "Currently airing TV Shows"}
      </h2>
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-6 g-0">
          {TVShows.map((TVShow) => (
            <TVShowCard key={TVShow.id} {...TVShow} />
          ))}
        </div>
      </div>
    </div>
  );
}