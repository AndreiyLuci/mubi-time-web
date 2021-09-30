import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import logo from "../../assets/images/MusicInTown (2).gif";
import "./ModalSignUp.css";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router";

function ModalLogin({ closeModal }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const {login} = useAuth();
  const {replace} = useHistory();

  const onChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const doLogin = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password)
      .then(() => {
        replace('/')
      })
      .catch((e) => setError(e))
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-close-btn">
          <button className="btn" onClick={() => closeModal(false)}>
            <XIcon style={{ height: 20, width: 20 }} />
          </button>
        </div>
        <div className="title">
          <img src={logo} alt="logo" />
          <p>
            <strong>Welcome Back!</strong>
          </p>
        </div>
        <div className="body">
        {error && <p>There was an error: {error}</p>}
          <form className="modal-form" onSubmit={doLogin}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              value={credentials.email}
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
            />
            <button type='submit' className="btn btn-light btn-outline-dark submit-button">
              Log In
            </button>
          </form>
          or
          <button>Log in with Google</button>
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

export default ModalLogin;
