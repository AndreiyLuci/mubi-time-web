import { useState } from "react";
import { useHistory } from "react-router";
import { editUser } from "../../services/UserService";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import { useAuth } from "../../hooks/useAuth";
import "../SignUp/SignUp.css";
// import GoogleLogin from "react-google-login";

export default function EditProfile() {

  const { user } = useAuth();

  const [editedUser, setEditedUser] = useState({
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
    setEditedUser((prev) => {
      const value =
        e.target.type === "file" ? e.target.files[0] : e.target.value;

        if(e.target.type === "file") {
          setFileUrl(URL.createObjectURL(e.target.files[0]));
       handleHidden() 
       }

      return { ...prev, [e.target.name]: value };
    });
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const doEditProfile = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(editedUser).forEach((key) => {
      formData.append(key, user[key]);
    });

    editUser(formData)
      .then(() => {
        replace(`/users/${user.username}`);
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
            Edit your profile
          </p>
        </div>
        <div className="SignUp-form">
          {error && <p>There was an error: {error}</p>}
          <form onSubmit={doEditProfile}>
            <div className="form-input">
              <label className="Label" htmlFor="email">
                Email
              </label>
              <input
                className="Input"
                name="email"
                id="email"
                type='email'
                value={editedUser.email}
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
                value={editedUser.password}
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
                value={editedUser.username}
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
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}