import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import { useAuth } from "../../hooks/useAuth";
import "./navbar.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="Navbar container-fluid position-fixed">
        <div className="navbar-flex">
          <div className="navbar-links">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <ul className="navbar-ul">
              <li>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Movies"
                  variant='none'
                >
                  <Dropdown.Item href="/movies/popular">
                  Popular
                  </Dropdown.Item>
                  <Dropdown.Item href="/movies/top-rated">
                    Top Rated
                  </Dropdown.Item>
                  <Dropdown.Item href="/movies/upcoming">Upcoming</Dropdown.Item>
                </DropdownButton>
              </li>
              <li className="nav-item dropdown">
              <DropdownButton
                  id="dropdown-basic-button"
                  title="TV Shows"
                  variant='none'
                >
                  <Dropdown.Item href="/tv-shows/popular">Popular</Dropdown.Item>
                  <Dropdown.Item href="/tv-shows/top-rated">
                    Top Rated
                  </Dropdown.Item>
                  <Dropdown.Item href="/tv-shows/on-the-air">On The Air</Dropdown.Item>
                </DropdownButton>
              </li>
              <li className="nav-item dropdown">
              <DropdownButton
                  id="dropdown-basic-button"
                  title="People"
                  variant='none'
                >
                  <Dropdown.Item href="/people/popular">Popular</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
          {user ? (
            <div className="navbar-info">
              <DropdownButton
              id="dropdown-basic-button"
                  title={<img
                  src={user.avatar}
                  className="navbar-avatar"
                  alt=""
                />}
                  variant='none'
                >
                  <Dropdown.Item href={`/users/${user.username}`}>{user.username}'s Profile</Dropdown.Item>
                  <Dropdown.Item><button className="btn" onClick={logout} title="Log out">
                Log Out
              </button></Dropdown.Item>
              </DropdownButton>
            </div>
            
          ) : (
            <div className="navbar-info">
              <NavLink to="/signup" className="" activeClassName="" exact>
                <button className="btn">Sign Up</button>
              </NavLink>
              <NavLink to="/login" className="" activeClassName="" exact>
                <button className="btn">Login</button>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      ;
    </div>
  );
}

<button
  class="btn dropdown-toggle"
  type="button"
  id="dropdownMenuButton1"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Dropdown button
</button>;

