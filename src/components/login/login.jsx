import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] =useState();
  const {login} = useAuth();
  const {replace} = useHistory();

  const onChange = (e) => {
    setCredentials((prev) =>({...prev, [e.target.name]:e.target.value}))
  };

  const doLogin = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password)
      .then(() => {
        replace('/')
      })
      .catch((e) => setError(e.response.data.message))
  };

  return (
    <div className="Login">
      {error && <p>There was an error: {error}</p>}
      <form onSubmit={doLogin}>
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
          type='password'
          value={credentials.password}
          onChange={onChange}
        />
        <button type='submit'>Log in</button>
      </form>
      <div>
        <p>Don't have an account?</p> <Link to='/signup'> Sign up </Link>
      </div>
    </div>
  );
}
