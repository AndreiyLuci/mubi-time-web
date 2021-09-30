import { useState } from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-image">
        <div className="Home-info">
          <h1>Welcome to MuBi Time.</h1>
          <h4>
            Millions of movies and TV shows are waiting for you. Explore now.
          </h4>
          <form className="">
            <input
              className="search-form"
              type="search"
              placeholder="Search for movies or TV shows..."
            ></input>
            <button>Hola</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// const [openModal, setOpenModal] = useState(false);

// {openModal && <ModalSignUp closeModal={setOpenModal} />}

// <button className="btn" onClick={() => setOpenModal(true)}>
//   Sign up &#10132;{" "}
// </button>
