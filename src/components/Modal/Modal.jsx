import React from "react";
import { XIcon } from "@heroicons/react/solid";
import logo from "../../assets/images/MusicInTown (2).gif";
import './Modal.css';

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className='titleCloseBtn'>
          <button className="btn" onClick={() => closeModal(false)}>
            <XIcon style={{ height: 20, width: 20 }} />
          </button>
        </div>
        <div className="title">
          <img src={logo} alt="logo" />
          <p>
            Sign up for Musicintown to get event updates for all your favorite
            artists.
          </p>
        </div>
        <div className="body">
          <form className='modalForm'>
            <label>Email</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <label>Username</label>
            <input></input>
            <label>Avatar</label>
            <input></input>
            <button className='btn btn-light btn-outline-dark submitButton'>Sign Up</button>
          </form>
          or
          <button>Sign in with Google</button>
        </div>
        <div className="footer">
          <p>
            By proceeding, you agree with our <a href="/">Terms of Service</a>,{" "}
            <a href="/">Privacy Policy</a>, and <a href="/">Cookie Policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
