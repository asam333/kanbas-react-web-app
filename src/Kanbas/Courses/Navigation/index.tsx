import "./index.css";
import { useLocation } from "react-router";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation"  style={{ width: 100 }}
    className="list-group fs-5 rounded-0 d-none d-md-block" >
      <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
        className={`list-group-item border border-0 ${pathname.includes("Home")?"active":"text-danger"}`}> Home </a>
      <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
        className={`list-group-item border border-0 ${pathname.includes("Modules")?"active":"text-danger"}`}> Modules </a>
      <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
        className={`list-group-item border border-0 ${pathname.includes("Piazza")?"active":"text-danger"}`}> Piazza </a>
      <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
        className={`list-group-item border border-0 ${pathname.includes("Zoom")?"active":"text-danger"}`}> Zoom </a>
      <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
        className={`list-group-item border border-0 ${pathname.includes("Assignments")?"active":"text-danger"}`}> Assignments </a>
      <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
        className={`list-group-item border border-0 ${pathname.includes("Quizzes")?"active":"text-danger"}`}> Quizzes </a>
      <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
        className={`list-group-item border border-0 ${pathname.includes("Grades")?"active":"text-danger"}`}> Grades </a>
    </div>
  );
}
