import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalSignUp from "../Modal/ModalSignUp";
import logo from "../../assets/images/MusicInTown (2).gif";
import menuIcon from "../../assets/images/MenuIcon.png";
import "./navbar.css";
import ModalLogin from "../Modal/ModalLogin";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
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
          <div className='buttons'>
            <button className="btn">
              Sign up{" "}
            </button>
            <button className="btn" >Log In</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

//Menu para ver el perfil una vez logado.
<Link className="" href="/">
  <img src={menuIcon} alt="logo" className="logo" />
</Link>;




// {openModal && <ModalSignUp closeModal={setOpenModal} />}
// {openModal && <ModalLogin closeModal={setOpenModal} />}

// <div className='buttons'>
//    <button className="btn" onClick={() => setOpenModal(true)}>
//      Sign up{" "}
//    </button>
//   <button className="btn" onClick={() => setOpenModal(true)}>Log In</button>
// </div>