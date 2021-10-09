import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { popularPeople } from "../../services/MovieService";
import Loader from "react-loader-spinner";
import './PeopleList.css'

export default function PeopleList() {
  const [people, setPeople] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    popularPeople()
      .then((people) => {
        setPeople(people.results);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <h2>😞 There was an error, retry in a few minutes 😞</h2>;
  }

  if (!people) {
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
        Popular People
      </h2>
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-6 g-0">
          {people.map((person) => (
            <div className="PeopleCard card col-sm-2">
              <Link to={`/people/${person.id}`}>
                <img
                  className="movie-poster card-img-top"
                  src={process.env.REACT_APP_IMAGE_URL + person.profile_path}
                  alt=""
                />
                <div className="people-info card-body">
                  <h6 className="card-title">{person.name}</h6>
                  <p>{person.known_for.map((show) => (
                    show.name || show.title
                  )).join(", ")}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
