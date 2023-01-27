import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Nav4 from "./Navbar4";
import Footer from "./Footer";
function Enterview() {
  return (
    <Fragment>
      <Nav4 />
      <div className="container main-enterview">
        <h1 className="h1">
          Cancer Detection using Machine Learning Algorithms
        </h1>
        <div className="d-flex justify-content-between">
          <div>
            <p>
              Contributer:<strong>Elon Musk</strong>
            </p>
            {/* <!-- <p className="motive-enter">motive-enter:</p> -->
          <!-- <h4>To detect the cancer cells accurately for efficient treatment of patients</h4> --> */}
            <p className="tech-enter">Technologies Used:</p>
            <p>
              <strong>Tensor Flow,Logistic Regression</strong>
            </p>
          </div>
          <div>
            <button className="btn btn-info">Edit</button>
          </div>
        </div>
        <p
          style={{
            color: "grey",
            "margin-top": "32px",
            "font-size": "18px",
            "margin-bottom": "8px",
          }}
        >
          Problem Statement
        </p>
        <h6 className="h5">
          Working of the above algorithm is efficient upto a specific level.But
          after that threshold limit is is getting failed.
        </h6>
        <h6 className="h5">Any one who can solve this will get awarded</h6>
        <h5 className="mt-5" style={{ color: "grey" }}>
          Description:
        </h5>
        <p className="des-enter-view" style={{ color: "black" }}>
          This project is about finding cancer cells using Machine Learning
          Algorithms and effectively treating the cancer.In this we feed the
          machine with the training data and test data.In the training data we
          provide the infromation about the previously detected cancer
          cells.With this we train the machine efficiently.Thus once after
          training the machine with the test data whose outputs are already
          known.Thus the algorithm is now ready to detect the cancer cells in
          the human body.And can be used effectivily in the treatment of cancer.
        </p>
        <h5 style={{ color: "grey" }} className="mt-3">
          Going to be revolutionary in:
        </h5>
        <ol>
          <li style={{ color: "black", "font-size": "18px" }}>
            Reducing human strain on detection of cancer cells.
          </li>
          <li style={{ color: "black", "font-size": "18px" }}>
            Saving lives of patients who are not getting cancer detection in
            enough time.
          </li>
          <li style={{ color: "black", "font-size": "18px" }}>
            Reducing the cost of cancer cell detection.
          </li>
        </ol>
        <h5 style={{ color: "grey" }}>Output:</h5>
        <p className="des-enter-view" style={{ color: "black" }}>
          The output of the above project is
        </p>
        <img
          src="https://news.developer.nvidia.com/wp-content/uploads/2016/06/DL-Breast-Cancer-Detection-Image.png"
          alt="drone-img"
          className="img-fluid"
          width="800px"
          height="auto"
        />

        {/* <!-- <p style="color:grey;margin-top:32px;font-size:18px;margin-bottom:8px;" >Click to Action</p> --> */}
        <p className="mt-5">
          Due Date Given:
          <span style={{ "font-size": "18px", "font-weight": "medium" }}>
            31/08/2023
          </span>
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}
export default Enterview;
