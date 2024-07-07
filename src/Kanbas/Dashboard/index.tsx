export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <img src="/images/career_design.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/000/Home">
              Career Design Course
            </a>
            <p className="wd-dashboard-course-title">
              career design
            </p>
            <a href="#/Kanbas/Courses/000/Home"> Go </a>
          </div>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <img src="/images/ood.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5004/Home">
              CS5004 Object Oriented Design
            </a>
            <p className="wd-dashboard-course-title">
              Object Oriented Design
            </p>
            <a href="#/Kanbas/Courses/5004/Home"> Go </a>
          </div>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <img src="/images/cs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5001/Home">
              CS5001 Introduction to Software Engineering
            </a>
            <p className="wd-dashboard-course-title">
              Bridge Course
            </p>
            <a href="#/Kanbas/Courses/5001/Home"> Go </a>
          </div>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <img src="/images/machine_learning.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/6140/Home">
              CS6140 Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              Intro to Machine Learning
            </p>
            <a href="#/Kanbas/Courses/6140/Home"> Go </a>
          </div>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <img src="/images/algorithm.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5800/Home">
              CS5800 Algorithm
            </a>
            <p className="wd-dashboard-course-title">
              Data Structure
            </p>
            <a href="#/Kanbas/Courses/5800/Home"> Go </a>
          </div>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

      </div>
    </div>
  );
}
