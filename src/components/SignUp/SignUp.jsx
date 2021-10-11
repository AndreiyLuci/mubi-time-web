import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { createUser } from "../../services/UserService";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import "./SignUp.css";
// import GoogleLogin from "react-google-login";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    avatar: undefined,
  });
  const [fileUrl, setFileUrl] = useState();
  const [hidden, setHidden] = useState(false);

  const [error, setError] = useState();
  const { replace } = useHistory();

  const onChange = (e) => {
    setUser((prev) => {
      const value =
        e.target.type === "file" ? e.target.files[0] : e.target.value;
        setFileUrl(URL.createObjectURL(e.target.files[0]));
        handleHidden()
      return { ...prev, [e.target.name]: value };
    });
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

  
  const onChangeImage = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    handleHidden();
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

  // const responseSuccessGoogle = (response) => {
  //   console.log(response);
  // };

  // const responseErrorGoogle = (response) => {};

  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <div className="SignUp-header">
          <img className="logo" src={logo} alt="logo" />
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
              <label className="Label" htmlFor="email">
                Email
              </label>
              <input
                className="Input"
                name="email"
                id="email"
                type='email'
                value={user.email}
                onChange={onChange}
              />
            </div>
            <div className="form-input">
              <label className="Label" htmlFor="password">
                Password
              </label>
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
              <label className="Label" htmlFor="username">
                Username
              </label>
              <input
                className="Input"
                name="username"
                id="username"
                value={user.username}
                onChange={onChange}
              />
            </div>
            <div className="avatar-form">
              <img
                src={fileUrl}
                className={hidden ? "avatar-image" : "avatar-image hidden"}
                alt="profile"
              />
              <label htmlFor="avatar">Select your profile pic...</label>
              <input
                className="avatar-input"
                name="avatar"
                id="avatar"
                type="file"
                onChange={onChange}
              />
            </div>
            <div>
              <button className="signup-btn" type="submit">
                <span>Sign Up</span>
              </button>
            </div>
          </form>
          <div className="login-link">
            <p>Already have an account?</p> <Link to="/login"> Log In </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Google Login

{/* <GoogleLogin
  clientId={process.env.REACT_APP_GOOGLE_ID}
  buttonText="Log in with Google"
  onSuccess={responseSuccessGoogle}
  onFailure={responseErrorGoogle}
  cookiePolicy={"single_host_origin"}
/>; */}
