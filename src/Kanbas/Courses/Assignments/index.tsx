import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { GripVertical } from "react-bootstrap-icons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdNoteAlt } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
export default function Assignments() {
  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text">
            <CiSearch />
          </span>
          <input
            type="text"
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" />
            Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" />
            Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignment-body" className="list-group rounded-0">
        <li className="wd-assignment-body list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <GripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3"/>
            Assignments
            <AssignmentControlButtons />
          </div>
          <ul className="wd-assignments list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row g-0 align-items-center">
                <div className="col-1">
                  <GripVertical className="me-2 fs-3" />
                  <MdNoteAlt className="me-2 fs-3 text-success" />
                </div>
                <div className="col-10">
                  <a className="wd-assignment-link fw-bold text-dark" href="#/Kanbas/Courses/1234/Assignments/123"
                    style={{ textDecoration: 'none' }}>
                    A1
                  </a>
                  <br />
                  <span className="wd-assignment-due-date text-muted">
                    Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
                    <br /> <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </span>
                </div>
                <div className="col-1">
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row g-0 align-items-center">
                <div className="col-1">
                  <GripVertical className="me-2 fs-3" />
                  <MdNoteAlt className="me-2 fs-3 text-success" />
                </div>
                <div className="col-10">
                  <a className="wd-assignment-link fw-bold text-dark" href="#/Kanbas/Courses/1234/Assignments/123"
                    style={{ textDecoration: 'none' }}>
                    A2
                  </a>
                  <br />
                  <span className="wd-assignment-due-date text-muted">
                    Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
                    <br /> <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </span>
                </div>
                <div className="col-1">
                  <LessonControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row g-0 align-items-center">
                <div className="col-1">
                  <GripVertical className="me-2 fs-3" />
                  <MdNoteAlt className="me-2 fs-3 text-success" />
                </div>
                <div className="col-10">
                  <a className="wd-assignment-link fw-bold text-dark" href="#/Kanbas/Courses/1234/Assignments/123"
                    style={{ textDecoration: 'none' }}>
                    A3
                  </a>
                  <br />
                  <span className="wd-assignment-due-date text-muted">
                    Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
                    <br /> <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </span>
                </div>
                <div className="col-1">
                  <LessonControlButtons />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}