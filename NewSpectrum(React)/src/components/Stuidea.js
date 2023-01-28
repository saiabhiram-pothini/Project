import React, { Fragment } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
function Stu() {
  return (
    <Fragment>
      <Nav3 />
      <div className="container main-idea">
        <h2>My Project Ideas</h2>
        <div className="row my-4">
          <div className="col-md-4">
            {/* <!-- <div className="small fw-light">rounded search input with icon</div> --> */}
            <div className="input-group">
              <input
                className="form-control border-end-0 border"
                type="search"
                placeholder="Search"
                id="example-search-input"
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-white bg-info border-start-0 border-bottom-0 border ms-n5"
                  type="button"
                >
                  <i className="bi bi-search"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center mb-3">Project Name</h3>
              <blockquote>
                <strong>Contributer</strong>:<em>Elon Musk</em>
              </blockquote>
              <p>
                <strong>Idea</strong>:You should change the code regarding...
              </p>
              <p>
                Status:<span className="badge bg-success">Approved</span>
              </p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary">View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center mb-3">Project Name</h3>
              <blockquote>
                <strong>Contributer</strong>:<em>Elon Musk</em>
              </blockquote>
              <p>
                <strong>Idea</strong>:You should change the code regarding...
              </p>
              <p>
                Status:<span className="badge bg-warning">In progress</span>
              </p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary">View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center mb-3">Project Name</h3>
              <blockquote>
                <strong>Contributer</strong>:<em>Elon Musk</em>
              </blockquote>
              <p>
                <strong>Idea</strong>:You should change the code regarding...
              </p>
              <p>
                Status:<span className="badge bg-info">Submitted</span>
              </p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary">View Idea</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center mb-3">Project Name</h3>
              <blockquote>
                <strong>Contributer</strong>:<em>Elon Musk</em>
              </blockquote>
              <p>
                <strong>Idea</strong>:You should change the code regarding...
              </p>
              <p>
                Status:<span className="badge bg-danger">Rejected</span>
              </p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary">View Idea</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="idea-tab px-3 py-2">
              <h3 className="text-center mb-3">Project Name</h3>
              <blockquote>
                <strong>Contributer</strong>:<em>Elon Musk</em>
              </blockquote>
              <p>
                <strong>Idea</strong>:You should change the code regarding...
              </p>
              <p>
                Status:<span className="badge bg-secondary">Draft</span>
              </p>
              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-primary">View Idea</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Stu;
