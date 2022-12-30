import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  const curState = useSelector((state) => state.number);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">
          Redux E-Com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <button className="btn btn-success">
              Your Balance is {curState}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
