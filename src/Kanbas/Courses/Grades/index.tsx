import { CiSearch } from "react-icons/ci";
import GradesControlButtons from "./GradesControlButtons";
import { CiFilter } from "react-icons/ci";

export default function Grades() {
  return (
    <div id="wd-grades">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <GradesControlButtons />
      </div>

      <div className="row g-0 align-items-center">

        <div className="col-6">
          <h5>Student Name</h5>
          <div className="input-group" style={{ width: '300px' }}>
            <span className="input-group-text">
              <CiSearch />
            </span>
            <input
              type="text"
              id="wd-search-student"
              className="form-select"
              placeholder="Search Students"
            />
          </div>
        </div>

        <div className="col-6">
          <h5>Assignment Name</h5>
          <div className="input-group" style={{ width: '300px' }}>
            <span className="input-group-text">
              <CiSearch />
            </span>
            <input
              type="text"
              id="wd-search-assignment"
              className="form-select"
              placeholder="Search Assignments"
            />
          </div>
        </div>
      </div>

      <button className="btn btn-secondary me-2 mt-2 mb-2">
        <CiFilter />
        Apply Filters
      </button>

      <table className="table table-bordered">
        <thead>
          <tr className="table-light">
            <th>Student Name</th>
            <th>A1 SETUP<br />Out of 100</th>
            <th>A2 HTML<br />Out of 100</th>
            <th>A3 CSS<br />Out of 100</th>
            <th>A4 BOOTSTRAP<br />Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-danger">Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.22%</td>
          </tr>
          <tr className="table-light">
            <td className="text-danger">Christina Allen</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td className="text-danger">Samreen Ansari</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr className="table-light">
            <td className="text-danger">Han Bao</td>
            <td>100%</td>
            <td>100%</td>
            <td>
              <input
                type="text"
                defaultValue="88.03"
                className="form-control"
              />
            </td>
            <td>98.99%</td>
          </tr>
          <tr>
            <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.37%</td>
            <td>100%</td>
          </tr>
          <tr className="table-light">
            <td className="text-danger">Siran Cao</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>


  );
}