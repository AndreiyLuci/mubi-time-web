import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { createUser } from "../../services/UserService";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import "./SignUp.css";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    avatar: undefined,
  });

  const [error, setError] = useState();
  const { replace } = useHistory();

  const onChange = (e) => {
    setUser((prev) => {
      const value =
        e.target.type === "file" ? e.target.files[0] : e.target.value;
      return { ...prev, [e.target.name]: value };
    });
  };

  const doRegister = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    createUser(formData)
      .then(() => {
        replace("/login");
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <div className="SignUp-header">
          <img src={logo} alt="logo" />
          <p>
            {" "}
            Sign up for{" "}
            <em>
              <strong>MuBi Time</strong>
            </em>{" "}
            to rate <br />
            and review your favorite shows
          </p>
        </div>
        <div className="SignUp-form">
          {error && <p>There was an error: {error}</p>}
          <form onSubmit={doRegister}>
            <div className="form-input">
              <label className='Label' htmlFor="email">Email</label>
              <input
                className="Input"
                name="email"
                id="email"
                value={user.email}
                onChange={onChange}
              />
            </div>
            <div className="form-input">
              <label className='Label' htmlFor="password">Password</label>
              <input
                className="Input"
                name="password"
                id="password"
                type="password"
                value={user.password}
                onChange={onChange}
              />
            </div>
            <div className="form-input">
              <label className='Label' htmlFor="username">Username</label>
              <input
                className="Input"
                name="username"
                id="username"
                value={user.username}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="avatar">Avatar</label>
              <input
                name="avatar"
                id="avatar"
                type="file"
                onChange={onChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div>
            <p>Already have an account?</p> <Link to="/login"> Log In </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
