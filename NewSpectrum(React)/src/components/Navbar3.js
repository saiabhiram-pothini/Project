import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Nav3() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
        <div className="container text-white">
          <Link className="navbar-brand" to="/">
            Akova
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav nav nav-fill w-100">
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to="/stu">
                  Home
                </Link>
              </li>
              {/* <!-- <li className="nav-item text-white">
              <div className="btn-group">
                <button type="button" className="btn btn-info dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tags
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Artificial Intelligence</a>
                  <a className="dropdown-item" href="#">Machine Learning</a>
                  <a className="dropdown-item" href="#">Cloud Computing</a>
                  
              </div>
              
            </li> --> */}
              {/* <!-- <li className="nav-item">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Artificial Intelligence"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li> --> */}
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to="/idea">
                  My ideas
                </Link>
              </li>
              {/* <!-- <li className="nav-item text-white">
              <a className="nav-link text-white" href="#"> Hello </a>
            </li> --> */}
              <li className="nav-item">
                <a className="nav-link text-white" href="apple.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown show">
                  <a
                    className="btn btn-primary dropdown-toggle"
                    href="apple.com"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-person-lines-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                    </svg>
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a className="dropdown-item" href="apple.com">
                      Profile
                    </a>
                    <a className="dropdown-item" href="apple.com">
                      My Ideas
                    </a>
                    <a className="dropdown-item" href="apple.com">
                      My Success
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Nav3;
