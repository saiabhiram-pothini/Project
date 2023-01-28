import React, { Fragment } from "react";
import Nav4 from "./Navbar4";
import Footer from "./Footer";

function Post() {
  return (
    <Fragment>
      <Nav4 />
      <div className="container main-post">
        <h1 className="h1 text-center">Upload a project</h1>
        <p className="text-secondary" style={{ fontSize: "28px" }}>
          Project Details
        </p>
        <h5>Project Title</h5>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="eg.. artificial intelligence based project"
        />
        <h5 className="mt-3">Tenologies & Languages</h5>
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Technologies"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Languages"
              />
            </div>
          </div>
        </form>
        {/* <!-- <h5>Domain</h5> --> */}
        <div className="mt-4">
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Domain</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    // checked
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Artificial Intelligence
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Machine Learning
                  </label>
                </div>
                <div className="form-check disabled">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    Robotics
                  </label>
                </div>
                <div className="form-check disabled">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    AR and VR
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <h5 className="mt-5">Description</h5>
        <form>
          <div className="form-group">
            {/* <!-- <label for="exampleFormControlTextarea1">Enter your idea</label> --> */}
            <div className="text-right">
              {/* <!-- <button type="button" className="btn btn-success">
                <i className="bi bi-link-45deg" style="font-size: 30px;color: green;"></i>
              </button> --> */}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
          </div>
        </form>
        <h5 className="mt-5">Uses</h5>
        <form>
          <div className="form-group">
            {/* <!-- <label for="exampleFormControlTextarea1">Enter your idea</label> --> */}
            <div className="text-right">
              {/* <!-- <button type="button" className="btn btn-success">
              <i className="bi bi-link-45deg" style="font-size: 30px;color: green;"></i>
            </button> --> */}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
          </div>
        </form>
        <h5 className="mt-5">Output</h5>
        <input
          className="form-control"
          type="text"
          placeholder="Few words about output"
        />
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Upload output</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </form>
        <h5 className="mt-5">Enter Due Date</h5>
        <div
          id="date-picker-example"
          className="md-form md-outline input-with-post-icon datepicker"
          inline="true"
        >
          <input
            placeholder="Select date(DD/MM/YYYY)"
            type="text"
            id="example"
            className="form-control"
          />
          {/* <!-- <label for="example">Try me...</label> -->
    <!-- <i className="bi bi-calendar input-prefix"></i> --> */}
        </div>

        <h3 className="mt-5">Enter your problem statement</h3>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="The problem is about.."
        />
      </div>

      <div className="d-flex justify-content-between mt-5 mb-5 container">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-success">Submit</button>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Post;
