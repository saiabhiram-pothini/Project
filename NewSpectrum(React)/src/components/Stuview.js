import React, { Fragment } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function View() {
  return (
    <Fragment>
      <Nav3 />
      <div className="container mainview">
        <h1 className="h1">
          Cancer Detection using Machine Learning Algorithms
        </h1>
        <p>
          Contributer:<strong>Elon Musk</strong>
        </p>
        {/* <!-- <p className="motive">Motive:</p> -->
      <!-- <h4>To detect the cancer cells accurately for efficient treatment of patients</h4> --> */}
        <p className="tech">Technologies Used:</p>
        <p>
          <strong>Tensor Flow,Logistic Regression</strong>
        </p>
        <h5 className="mt-5">Description:</h5>
        <p className="des">
          This project is about finding cancer cells using Machine Learning
          Algorithms and effectively treating the cancer.In this we feed the
          machine with the training data and test data.In the training data we
          provide the infromation about the previously detected cancer
          cells.With this we train the machine efficiently.Thus once after
          training the machine with the test data whose outputs are already
          known.Thus the algorithm is now ready to detect the cancer cells in
          the human body.And can be used effectivily in the treatment of cancer.
        </p>
        <h5>Going to be revolutionary in:</h5>
        <ol>
          <li>Reducing human strain on detection of cancer cells.</li>
          <li>
            Saving lives of patients who are not getting cancer detection in
            enough time.
          </li>
          <li>Reducing the cost of cancer cell detection.</li>
        </ol>
        <h5>Output:</h5>
        <p className="des">The output of the above project is</p>
        <img
          src="https://news.developer.nvidia.com/wp-content/uploads/2016/06/DL-Breast-Cancer-Detection-Image.png"
          alt="drone-img"
          className="img-fluid"
          width="800px"
          height="auto"
        />
        <p
          style={{
            color: "grey",
            marginTop: "32px",
            fontSize: "18px",
            marginBottom: "8px",
          }}
        >
          Problem Statement
        </p>
        <h6 className="h5">
          Working of the above algorithm is efficient upto a specific level.But
          after that threshold limit is is getting failed.
        </h6>
        <h6 className="h5">Any one who can solve this will get awarded</h6>
        {/* <!-- <p style="color:grey;margin-top:32px;font-size:18px;margin-bottom:8px;" >Click to Action</p> --> */}
        <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
          <div>
            <div className="flex justify-content-around">
              <button className="btn btn-primary mx-2">View Code</button>
              <button className="btn btn-outline-warning">See Demo</button>
            </div>
          </div>
          <div className="up-car p-4">
            <h6 className="h5 text-center">Got the solution!</h6>
            <p style={{ fontSize: "20px" }}>You can upload your idea here</p>
            <div className="d-flex justify-content-center">
              <Link to="/sub" target="_blank">
                <button className="btn btn-success">Upload Idea</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default View;
