import { Fragment } from "react";
function Footer() {
  return (
    <Fragment>
      <footer className="text-center text-lg-start bg-dark text-white">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="apple.com" className="me-4 link-secondary mx-1">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="apple.com" className="me-4 link-secondary mx-1">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="apple.com" className="me-5 link-secondary mx-1">
              <i className="bi bi-google"></i>
            </a>
            <a href="apple.com" className="me-4 link-secondary mx-1">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="apple.com" className="me-4 link-secondary mx-1">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="apple.com" className="me-4 link-secondary mx-1">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        <section className="#">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>AKOVA
                </h6>
                <p>This is where talent meets opportunity....</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="apple.com" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="apple.com" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="apple.com" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="apple.com" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="apple.com" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="apple.com" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="apple.com" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="apple.com" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> New York,
                  NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                  567 88
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Akova
          </a>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
