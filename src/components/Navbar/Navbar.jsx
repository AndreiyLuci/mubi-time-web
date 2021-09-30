import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import "./navbar.css";

export default function Navbar() {
  

  return (
    <div>
      <nav className="Navbar container-fluid position-fixed">
        <div className="navbar-flex">
          <Link className="" href="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
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
{/* <Link className="" href="/">
  <img src={menuIcon} alt="logo" className="logo" />
</Link>; */}

// const [openModal, setOpenModal] = useState(false);


// {openModal && <ModalSignUp closeModal={setOpenModal} />}
// {openModal && <ModalLogin closeModal={setOpenModal} />}

// <div className='buttons'>
//    <button className="btn" onClick={() => setOpenModal(true)}>
//      Sign up{" "}
//    </button>
//   <button className="btn" onClick={() => setOpenModal(true)}>Log In</button>
// </div>