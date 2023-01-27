import React, { Fragment } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
function Submit() {
  return (
    <Fragment>
      <Nav3 />
      <div className="container main-submit">
        <h1 className="mb-5">Cancer Detection using Machine Learning</h1>
        <h5 className="h3">Solution Overview</h5>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Type something.."
        />
        <h3 className="mb-4 mt-5">Upload your idea</h3>

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
        <div className="d-flex justify-content-between">
          <div className="mt-4">
            <form>
              <div className="form-group">
                <label for="exampleFormControlFile1">Upload a file</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
          </div>
          <div className="mt-4">
            <button className="btn btn-success">Submit Idea</button>
          </div>
        </div>
      </div>
      <h5 className="mb-4 mt-5 container">Comment</h5>
      <form>
        <div className="form-group container">
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
      <div className="d-flex mt-3 mb-5 justify-content-end container">
        <button className="btn btn-primary">Post</button>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Submit;
