export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/000/Home">
                <img src="/images/career_design.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  Career Design Course
                  </h5>
                  <p className="card-text">
                  career design
                  career design
                  career design
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/5004/Home">
                <img src="/images/cs.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5001 Introduction to CS
                  </h5>
                  <p className="card-text">
                  Bridge Course
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/6140/Home">
                <img src="/images/machine_learning.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS6140 Machine Learning
                  </h5>
                  <p className="card-text">
                  Intro to Machine Learning
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/5800/Home">
                <img src="/images/algorithm.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5800 Algorithm
                  </h5>
                  <p className="card-text">
                  Data Structure and Information
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/5004/Home">
                <img src="/images/cs.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5001 Introduction to CS
                  </h5>
                  <p className="card-text">
                  Bridge Course
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col mt-4 mb-4" style={{ width: "260px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={150}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
