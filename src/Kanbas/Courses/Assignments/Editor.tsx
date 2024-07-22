import { BorderStyle } from "react-bootstrap-icons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    return (
        <div id="wd-assignments-editor" className="container mt-5">
            <div className="mb-4">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value={assignment && assignment.title} />
            </div>
            <div className="mb-4">
                <textarea id="wd-description" className="form-control"
                    style={{
                        height: '200px'
                    }}>
                    {`The assignment is available online.
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
Your full name and section
Links to each of the lab assignments
Link to the Kanbas application
Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
                </textarea>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points" className="form-label float-end">Points</label>
                </div>
                <div className="col-md-6">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-group" className="form-label float-end">Assignment Group</label>
                </div>
                <div className="col-md-6">
                    <select id="wd-group" className="form-select">
                        <option value="midterm">MIDTERM</option>
                        <option value="final">FINAL</option>
                        <option selected value="assignment">ASSIGNMENT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-display-grade-as" className="form-label float-end">Display Grade as</label>
                </div>
                <div className="col-md-6">
                    <select id="wd-display-grade-as" className="form-select">
                        <option value="point">Point</option>
                        <option value="gpa">GPA</option>
                        <option selected value="per">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label float-end">Submission Type</label>
                </div>
                <div className="col-md-6">
                    <div className="wd-submission-type p-3" style={{ borderStyle: "solid" }}>
                        <div>
                            <select id="wd-submissio-type" className="form-select">
                                <option value="paper">On Paper</option>
                                <option selected value="online">Online</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Online Entry Options</label>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-website-url" />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recording</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wd-chkbox-file-upload" />
                                <label className="form-check-label" htmlFor="wd-chkbox-file-upload">File Uploads</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label float-end">Assign</label>
                </div>
                <div className="col-md-6">
                    <div className="wd-submission-type p-3" style={{ borderStyle: "solid" }}>
                        <div>
                            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                            <input id="wd-assign-to" className="form-control" value="Everyone" />
                        </div>

                        <div>
                            <label htmlFor="wd-due-date" className="form-label">Due</label>
                            <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}



