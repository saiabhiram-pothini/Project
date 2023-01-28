import React, { Fragment } from "react";
import Nav4 from "./Navbar4";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Enterprenuer() {
  return (
    <Fragment>
      <Nav4 />
      <div className="container-fluid main-enter px-5">
        <h1 className="text-center">My Projects</h1>

        <div className="d-flex flex-column">
          <div className="row proj-tab-enter mt-5">
            <div className="col-sm-6">
              <div className="py-3 px-4">
                <h2 className="h2 text-center mt-2">Drone Controlled by AI</h2>
                <p className="mt-3 des-enter">
                  Description
                  <span
                    className="badge badge-warning mx-5"
                    style={{ textAlign: "right" }}
                  >
                    Ongoing
                  </span>
                </p>
                <p className="prj-des-enter">
                  The project is about a drone controlled by AI.Which will
                  reduce the human effort to operate the drones and saves lot of
                  time and money....
                </p>
                <p className="des-enter">Problem Statement</p>
                <p className="prb-sta-enter">
                  Voice Commands are not working properly.And motion detection
                  is not working properly.
                </p>
                <p>
                  <span className="des-enter">No.Of.Responses: </span>
                  <span style={{ fontSize: "18px" }}>25</span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to="/resp">
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to="/enterv">
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6"
              style={{
                textAlign: "right",
                paddingRight: "0",
                paddingLeft: "0",
              }}
            >
              <img
                src="https://images.newscast-pratyaksha.com/english/wp-content/uploads/2020/01/AI-Swarm-Drones.jpg"
                alt="drone-img"
                className="img-responsive eimg"
              />
            </div>
          </div>
          <div className="row proj-tab-enter mt-5">
            <div className="col-sm-6">
              <div className="px-3 py-4">
                <h2 className="h2 text-center mt-2">
                  Alexa Based Voice Interface
                </h2>
                <p className="mt-3 des-enter">
                  Description
                  <span
                    className="badge badge-success mx-5"
                    style={{ textAlign: "right" }}
                  >
                    Completed
                  </span>
                </p>
                <p className="prj-des-enter">
                  The project is about a drone controlled by AI.Which will
                  reduce the human effort to operate the drones and saves lot of
                  time and money....
                </p>
                <p className="des-enter">Problem Statement</p>
                <p className="prb-sta-enter">
                  Voice Commands are not working properly.And motion detection
                  is not working properly.
                </p>
                <p>
                  <span className="des-enter">No.Of.Responses: </span>
                  <span style={{ fontSize: "18px" }}>25</span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to="/resp">
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to="/enterv">
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                paddingRight: "0",
                paddingLeft: "0",
              }}
              className="col-sm-6"
            >
              <img
                src="https://www.techadvisor.com/wp-content/uploads/2022/06/echo-dot-4-review-with-clock.jpg?quality=50&strip=all&w=1024"
                alt="drone-img"
                className="image-responsive eimg"
              />
            </div>
          </div>
          <div className="row proj-tab-enter mt-5">
            <div className="col-sm-6">
              <div className="px-3 py-4">
                <h2 className="h2 text-center mt-2">
                  Cancer Detection using ML
                </h2>
                <p className="mt-3 des-enter">
                  Description
                  <span
                    className="badge badge-info mx-5"
                    style={{ textAlign: "right" }}
                  >
                    In progress
                  </span>
                </p>
                <p className="prj-des-enter">
                  The project is about a drone controlled by AI.Which will
                  reduce the human effort to operate the drones and saves lot of
                  time and money....
                </p>
                <p className="des-enter">Problem Statement</p>
                <p className="prb-sta-enter">
                  Voice Commands are not working properly.And motion detection
                  is not working properly.
                </p>

                <p>
                  <span className="des-enter">No.Of.Responses: </span>
                  <span style={{ fontSize: "18px" }}>25</span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to="/resp" target="_blank">
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to="/enterv" target="_blank">
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                paddingRight: "0",
                paddingLeft: "0",
              }}
              className="col-sm-6"
            >
              <img
                src="https://news.developer.nvidia.com/wp-content/uploads/2016/06/DL-Breast-Cancer-Detection-Image.png"
                alt="drone-img"
                className="img-responsive eimg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Enterprenuer;
