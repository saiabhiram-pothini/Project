import React, { Fragment } from "react";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function index() {
  return (
    <Fragment>
      <Navbar1 />
      <div className="container-fluid main-bg">
        <h1 className="h1 brand text-center">Akova</h1>
        <p className="text-center quote">
          Innovation distinguishes between a leader and a follower
        </p>
      </div>
      <div className="container-fulid px-5" style={{ marginTop: "3rem" }}>
        <h1 style={{ color: "gray" }}>What is Akova??</h1>
        <p style={{ fontSize: "26px" }} className="px-3">
          Akova is a portal where the budding techies and enterprenuers can
          mutually exchange their ideas
        </p>
        <div className="row mt-5 mb-5">
          <div className="col-sm-6">
            <div className="tab-main py-3 px-3">
              <h2 className="text-center">Students</h2>
              <blockquote className="px-3" style={{ fontSize: "22px" }}>
                Students can explore their skills and can gain more knowlede by
                giving solutions to the problems that are higly complex and huge
              </blockquote>
              <p className="px-4" style={{ fontSize: "22px" }}>
                <strong>Uses for students</strong>
              </p>
              <ol style={{ fontSize: "18px" }}>
                <li>Can interact with professionals</li>
                <li>Can get internships from top MNCs</li>
                <li>Can get works experience at high level</li>
              </ol>
              <div className="d-flex justify-content-between p-3">
                <Link to="/stu" target="_blank">
                  <button className="btn btn-success">Login</button>
                </Link>
                <Link to="/stu" target="_blank">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="tab-main py-3 px-3">
              <h2 className="text-center">Enterprenuer</h2>
              <blockquote className="px-3" style={{ fontSize: "22px" }}>
                Enterprenuers can expand their reach by submitting their
                problems,and can get solutions to their questions by highly
                talented students or youth
              </blockquote>
              <p className="px-4" style={{ fontSize: "20px" }}>
                <strong>Uses for enterprenuers</strong>
              </p>
              <ol style={{ fontSize: "18px" }}>
                <li>Can interact with hihly skilled students</li>
                <li>Can get ideas from new talents</li>
                <li>Can recruit highly skilled professionals</li>
              </ol>
              <div className="d-flex justify-content-between p-3">
                <Link to="/enter" target="_blank">
                  <button className="btn btn-success">Login</button>
                </Link>
                <Link to="/enter" target="_blank">
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default index;
