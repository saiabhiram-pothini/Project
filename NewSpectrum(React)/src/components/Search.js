import React, { Fragment } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Search() {
  return (
    <Fragment>
      <Nav3 />
      <div className="container-fluid main-search">
        <div className="container-fluid mb-4">
          <nav
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
            className="mb-4"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/stu">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Pick a project
              </li>
            </ol>
          </nav>
          <div className="row my-3">
            <div className="col-md-8">
              {/* <!-- <div className="small fw-light">rounded search input with icon</div> --> */}
              <div className="input-group">
                <input
                  className="form-control border-end-0 border"
                  type="search"
                  placeholder="Search for projects"
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
          <div className="row container-fulid px-5">
            <div className="chip">
              <div className="chipinactive">All</div>
            </div>

            <div className="chip ca">
              <div className="chipactive">Artificial Intelligence</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Machine Learning</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Data Science</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Cloud Computing</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Robotics</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Cyber Security</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Web Development</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Android Development</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Ios Development</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Virtual Reality</div>
            </div>

            <div className="chip">
              <div className="chipinactive">Argumented Reality</div>
            </div>
          </div>
        </div>

        <h2 className="mt-5 mx-4">
          Search Results for "Artificial Intelligence"
        </h2>

        <div className="row mx-5 mt-5">
          <div className="col-sm-4">
            <div className="proj-tab">
              <div>
                <img
                  src="https://www.sueddeutsche.de/image/sz.1.5708878/1200x675?v=1670167399"
                  alt="imag"
                  width="100%"
                  height="auto"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-center mb-4">Problem Statement-1</h3>
                <p className="pro-p">
                  The project is about artificial intelligence.And this can be
                  used for many activities.Part in make in India
                </p>
                <p>
                  Contributor:<strong>Elon Musk</strong>
                </p>
                <Link to="/view" target="_blank">
                  <button className="btn btn-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="proj-tab">
              <div>
                <img
                  src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/vr-headset-freepik-1653918479.jpg"
                  alt="imag"
                  width="100%"
                  height="auto"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-center mb-4">Problem Statement-2</h3>
                <p className="pro-p">
                  The project is about artificial intelligence.And this can be
                  used for many activities.Part in make in India
                </p>
                <p>
                  Contributor:<strong>Elon Musk</strong>
                </p>

                <Link to="/view" target="_blank">
                  <button className="btn btn-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="proj-tab">
              <div>
                <img
                  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
                  alt="imag"
                  width="100%"
                  height="auto"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-center mb-4">Problem Statement-3</h3>
                <p className="pro-p">
                  The project is about artificial intelligence.And this can be
                  used for many activities.Part in make in India
                </p>
                <p>
                  Contributor:<strong>Elon Musk</strong>
                </p>

                <Link to="/view" target="_blank">
                  <button className="btn btn-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-5 mt-5">
          <div className="col-sm-4">
            <div className="proj-tab">
              <div>
                <img
                  src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/162587-homepage-news-feature-what-is-apple-crash-detection-and-how-does-it-work-on-iphone-and-apple-watch-image1-f1zcnrlxhw.jpg"
                  alt="imag"
                  width="100%"
                  height="auto"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-center mb-4">Problem Statement-4</h3>
                <p className="pro-p">
                  The project is about artificial intelligence.And this can be
                  used for many activities.Part in make in India
                </p>
                <p>
                  Contributor:<strong>Elon Musk</strong>
                </p>

                <Link to="/view" target="_blank">
                  <button className="btn btn-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="proj-tab">
              <div>
                <img
                  src="https://scwcontent.affino.com/AcuCustom/Sitename/DAM/014/Autonomous-vehicle-AdobeStock_174958313.png"
                  alt="imag"
                  width="100%"
                  height="auto"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-center mb-4">Problem Statement-5</h3>
                <p className="pro-p">
                  The project is about artificial intelligence.And this can be
                  used for many activities.Part in make in India
                </p>
                <p>
                  Contributor:<strong>Elon Musk</strong>
                </p>

                <Link to="/view" target="_blank">
                  <button className="btn btn-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="proj-tab">
              <div>
                <img
                  src="https://techcrunch.com/wp-content/uploads/2022/09/apple-emergency-sos-app.jpg"
                  alt="imag"
                  width="100%"
                  height="auto"
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-center mb-4">Problem Statement-6</h3>
                <p className="pro-p">
                  The project is about artificial intelligence.And this can be
                  used for many activities.Part in make in India
                </p>
                <p>
                  Contributor:<strong>Elon Musk</strong>
                </p>

                <Link to="/view" target="_blank">
                  <button className="btn btn-primary">View More</button>
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
export default Search;
