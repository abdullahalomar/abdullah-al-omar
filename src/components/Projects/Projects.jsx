import projectShape from "/public/assets/img/project/project-shape.png";
import brand1 from "/public/assets/img/project/brand-1.jpg";
import app2 from "/public/assets/img/project/app-2.jpg";
import project4 from "/public/assets/img/project/project-4.jpg";
import project1 from "/public/assets/img/project/project-1.jpg";
import project2 from "/public/assets/img/project/project-2.jpg";
import projectFour from "/public/assets/img/project/project-4.jpg";
import brandOne from "/public/assets/img/project/brand-1.jpg";
import brandTwo from "/public/assets/img/project/brand-2.jpg";
import brandThree from "/public/assets/img/project/brand-3.jpg";
import app1 from "/public/assets/img/project/app-1.jpg";
import appTwo from "/public/assets/img/project/app-2.jpg";
import appThree from "/public/assets/img/project/app-3.jpg";

const Projects = () => {
  return (
    <div>
      <div className="tp-project-area p-relative pt-130 pb-100">
        <div className="tp-project-shape">
          <img src={projectShape} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-xl-5 col-lg-12 col-md-12">
              <div className="tp-project-section-box">
                <h5 className="tp-subtitle">Our Project</h5>
                <h2 className="tp-title">Creative work. </h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
              <div className="tp-service-tab-button">
                <nav>
                  <div
                    className="nav tp-service-tab justify-content-xl-end justify-content-lg-center"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-links mb-10"
                      id="nav-all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#all"
                      type="button"
                      role="tab"
                      aria-controls="all"
                      aria-selected="true"
                    >
                      All
                    </button>

                    <button
                      className="nav-links mb-10"
                      id="nav-design-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#design"
                      type="button"
                      role="tab"
                      aria-controls="design"
                      aria-selected="true"
                    >
                      Website Design
                    </button>

                    <button
                      className="nav-links active mb-10"
                      id="nav-branding-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#branding"
                      type="button"
                      role="tab"
                      aria-controls="branding"
                      aria-selected="true"
                    >
                      Branding Design
                    </button>

                    <button
                      className="nav-links mb-10"
                      id="nav-app-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#app"
                      type="button"
                      role="tab"
                      aria-controls="app"
                      aria-selected="true"
                    >
                      App Design
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade "
              id="all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
            >
              <div className="project-tab-main">
                <div className="row gx-1  ">
                  <div className="col-xl-6 col-lg-12">
                    <div className="tp-project-box mb-20">
                      <div className="tp-project-img fix mb-45">
                        <img className="w-100" src={brand1} alt="" />
                      </div>
                      <div className="tp-project-content ml-20">
                        <h2 className="pro-lg-title">
                          <a href="portfolio-details.html">
                            Hosting Website Design
                          </a>
                        </h2>
                        <p>
                          At Collax we specialize in designing, building,
                          shipping...
                        </p>
                        <a className="tp-btn-sm" href="contact.html">
                          View Case Studies{" "}
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="row">
                      <div className=" col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center mb-20">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={app2} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Medical Website
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={project4} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Pet Care Website
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="cportfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="design"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <div className="project-tab-main">
                <div className="row gx-1  ">
                  <div className="col-xl-6 col-lg-12">
                    <div className="tp-project-box mb-20">
                      <div className="tp-project-img fix mb-45">
                        <img className="w-100" src={project1} alt="" />
                      </div>
                      <div className="tp-project-content ml-20">
                        <h2 className="pro-lg-title">
                          <a href="portfolio-details.html">
                            Hosting Website Design
                          </a>
                        </h2>
                        <p>
                          At Collax we specialize in designing, building,
                          shipping...
                        </p>
                        <a className="tp-btn-sm" href="portfolio-details.html">
                          View Case Studies{" "}
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="row">
                      <div className=" col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center mb-20">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={project2} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Medical Website
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={projectFour} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Pet Care Website
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show active "
              id="branding"
              role="tabpanel"
              aria-labelledby="nav-branding-tab"
            >
              <div className="project-tab-main">
                <div className="row gx-1  ">
                  <div className="col-xl-6 col-lg-12">
                    <div className="tp-project-box mb-20">
                      <div className="tp-project-img fix mb-45">
                        <img className="w-100" src={brandOne} alt="" />
                      </div>
                      <div className="tp-project-content ml-20">
                        <h2 className="pro-lg-title">
                          <a href="portfolio-details.html">
                            Web Application Design
                          </a>
                        </h2>
                        <p>
                          At Collax we specialize in designing, building,
                          shipping...
                        </p>
                        <a className="tp-btn-sm" href="portfolio-details.html">
                          View Case Studies{" "}
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="row">
                      <div className=" col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center mb-20">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={brandTwo} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Globar Art Deisgn
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={brandThree} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Modern Branding Design
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="app"
              role="tabpanel"
              aria-labelledby="nav-app-tab"
            >
              <div className="project-tab-main">
                <div className="row gx-1  ">
                  <div className="col-xl-6 col-lg-12">
                    <div className="tp-project-box mb-20">
                      <div className="tp-project-img fix mb-45">
                        <img className="w-100" src={app1} alt="" />
                      </div>
                      <div className="tp-project-content ml-20">
                        <h2 className="pro-lg-title">
                          <a href="portfolio-details.html">
                            Banking App Management
                          </a>
                        </h2>
                        <p>
                          At Collax we specialize in designing, building,
                          shipping...
                        </p>
                        <a className="tp-btn-sm" href="portfolio-details.html">
                          View Case Studies{" "}
                          <i className="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="row">
                      <div className=" col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center mb-20">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={appTwo} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Financial App Deisgn
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="tp-project-box-sm d-flex align-items-center">
                          <div className="tp-project-sm-img fix ml-25 mr-35">
                            <img src={appThree} alt="" />
                          </div>
                          <div className="tp-project-sm-content">
                            <h3 className="pro-sm-title">
                              <a href="portfolio-details.html">
                                Yoga App Desgin
                              </a>
                            </h3>
                            <p>
                              At Collax we specialize in the most designing,
                              building, shipping...
                            </p>
                            <a
                              className="tp-btn-white-sm"
                              href="portfolio-details.html"
                            >
                              Case Studies{" "}
                              <i className="far fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
