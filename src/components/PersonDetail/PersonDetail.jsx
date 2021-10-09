import { LinkIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import {
  getPersonCredits,
  getPersonDetail,
  getSocialIdsPerson,
} from "../../services/MovieService";
import "./PersonDetail.css";

export default function PersonDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [socialId, setSocialId] = useState({});
  const [credit, setCredit] = useState([])

  useEffect(() => {
    getPersonDetail(id)
      .then((person) => setPerson(person))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    getSocialIdsPerson(id)
      .then((socialId) => setSocialId(socialId))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    getPersonCredits(id)
      .then((credit) => setCredit(credit.cast))
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return <h2>😞 There was an error, retry in a few minutes 😞</h2>;
  }

  if (!person.profile_path) {
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
    <div className="PersonDetail">
      <div className="personal-info-image">
          <img
            src={process.env.REACT_APP_IMAGE_URL + person.profile_path}
            alt=""
          />
        <div className='personal-info'>
          <div className="social-media">
            <ul className="social-links">
              <li>
                <Link
                  to={{
                    pathname: `https://www.facebook.com/${socialId.facebook_id}`,
                  }}
                  target="_blank"
                >
                  <SocialIcon
                    network="facebook"
                    style={{ height: 35, width: 35 }}
                    bgColor="#545454"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `https://www.twitter.com/${socialId.twitter_id}`,
                  }}
                  target="_blank"
                >
                  <SocialIcon
                    network="twitter"
                    style={{ height: 35, width: 35 }}
                    bgColor="#545454"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `https://www.instagram.com/${socialId.instagram_id}`,
                  }}
                  target="_blank"
                >
                  <SocialIcon
                    network="instagram"
                    style={{ height: 35, width: 35 }}
                    bgColor="#545454"
                  />
                </Link>
              </li>
              <li>
                <div className="homepage-border">
                  <Link
                    to={{
                      pathname: `${person.homepage}`,
                    }}
                    target="_blank"
                  >
                    <LinkIcon className="movie-link" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className='person-info'>
            <h3>Personal Info</h3>
            <div>
              <h5>Known For</h5>
              <p>{person.known_for_department}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{person.gender === 2 ? 'Male' : (person.gender === 3 ? 'Non-Binary' : 'Female')}</p>
            </div>
            <div>
              <h5>Birthday</h5>
              <p>{person.birthday}</p>
            </div>
            {person.deathday ? 
              (<div>
                <h5>Day of death</h5>
                <p>{person.deathday}</p>
              </div>) : (<div></div>)
            }
            <div>
              <h5>Place of birth</h5>
              <p>{person.place_of_birth}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="person-biography-knownfor">
        <div>
          <h1>{person.name}</h1>
          <div className="person-biography">
            <h4>Biography</h4>
            <p>{person.biography}</p>
          </div>
          <div>
            <div className="movie-cast">
            <h4>Appears on</h4>
            <div className=" container">
              <div className="movie-cast-slider">
                {credit.map((credit) => (
                  <div className="movie-cast-card">
                    <Link to={credit.media_type === "movie" ? `/movies/${credit.id}` : `/tv-show/${credit.id}`}>
                      <div>
                        <img
                          className="cast-card-image"
                          src={
                            process.env.REACT_APP_IMAGE_URL +
                            credit.poster_path
                          }
                          alt="profile"
                        />
                      </div>
                      <div className="card-info">
                        <h6>{credit.media_type === "movie" ? credit.title : credit.name}</h6>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
