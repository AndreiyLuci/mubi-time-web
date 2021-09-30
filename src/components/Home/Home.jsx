import { useState } from "react";
import ModalSignUp from "../Modal/ModalSignUp";
import "./home.css";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Home">
      <div className="Home-image">
          {openModal && <ModalSignUp closeModal={setOpenModal} />}
        <div className="Home-info">
          <h1>
            Search millions of artists,
            <br /> concerts & events
          </h1>
          <p>Discover your next live music experience on Musicintown.</p>
          <div>
            <span>
              <button className="btn" onClick={() => setOpenModal(true)}>
                Sign up &#10132;{" "}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
