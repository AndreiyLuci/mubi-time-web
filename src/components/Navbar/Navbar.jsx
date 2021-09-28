import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/MusicInTown (2).gif";
import menuIcon from "../../assets/images/MenuIcon.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar container-fluid position-fixed">
      <div className="navbar-flex">
        <Link className="" href="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="" id="">
          <form className="">
            <input
              className="search-form"
              type="search"
              placeholder="Search for artists or events..."
            ></input>
          </form>
        </div>
        <div>
          <button className='btn'>Sign up </button>
          <button className='btn'>Log In</button>
        </div>
      </div>
    </nav>
  );
}


//Menu para ver el perfil una vez logado.
<Link className="" href="/">
  <img src={menuIcon} alt="logo" className="logo" />
</Link>;
