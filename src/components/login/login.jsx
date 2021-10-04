import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import "./Login.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const { login } = useAuth();
  const { replace } = useHistory();

  const onChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const doLogin = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password)
      .then(() => {
        replace("/");
      })
      .catch((e) => setError(e.response.data.message));
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-header">
          <img className="logo" src={logo} alt="logo" />
          <p>
            <em>Welcome back!</em>
          </p>
        </div>
        <div className="Login-form">
          {error && <p>There was an error: {error}</p>}
          <form onSubmit={doLogin}>
            <div className="form-input">
              <label className="Label" htmlFor="email">Email</label>
              <input
                className="Input"
                name="email"
                id="email"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="form-input">
              <label className="Label" htmlFor="password">Password</label>
              <input
                className="Input"
                name="password"
                id="password"
                type="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <button className='Login-btn' type="submit"><span>Log in</span></button>
          </form>
          <div className='signup-link'>
            <p>Don't have an account?</p> <Link to="/signup"> Sign up </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
