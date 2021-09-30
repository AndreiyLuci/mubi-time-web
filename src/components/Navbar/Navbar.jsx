import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/_Cine Evento Logotipo Line.png";
import { useAuth } from "../../hooks/useAuth";
import "./navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="Navbar container-fluid position-fixed">
        <div className="navbar-flex">
          <Link className="" href="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          {user ? (
            <div className='navbar-info'>
            <NavLink to="/profile" exact className="btn ">
              <img src={user.avatar} style={{height: "30px"}} className="" alt="" />
              <span className="">{user.username}</span>
            </NavLink>
            <button
                  className="btn"
                  onClick={logout}
                  title="Log out"
                >
                  Log Out
                </button>
            </div>
          ) : (
            <div className='navbar-info'>
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
    </div>
  );
}

// //Menu para ver el perfil una vez logado.
// {
//   /* <Link className="" href="/">
//   <img src={menuIcon} alt="logo" className="logo" />
// </Link>; */
// }

// const [openModal, setOpenModal] = useState(false);

// {openModal && <ModalSignUp closeModal={setOpenModal} />}
// {openModal && <ModalLogin closeModal={setOpenModal} />}

// <div className='buttons'>
//    <button className="btn" onClick={() => setOpenModal(true)}>
//      Sign up{" "}
//    </button>
//   <button className="btn" onClick={() => setOpenModal(true)}>Log In</button>
// </div>
