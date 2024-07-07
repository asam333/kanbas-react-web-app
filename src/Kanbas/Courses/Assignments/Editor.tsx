
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="midterm">MIDTERM</option>
                            <option value="final">FINAL</option>
                            <option selected value="assignment">ASSIGNMENT</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="point">Point</option>
                            <option value="gpa">GPA</option>
                            <option selected value="per">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submissio-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submissio-type">
                            <option value="paper">On Paper</option>
                            <option selected value="online">Online</option>
                        </select>
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label> Online Entry Options</label>
                        <br />
                        <input type="checkbox" name="check-genre" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recording</label><br />

                        <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-file-upload" />
                        <label htmlFor="wd-chkbox-file-upload">File Uploads</label><br />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <br />
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                        <br />
                        <input
                            type="date"
                            id="wd-due-date"
                            value="2024-05-13" />
                    </td>
                </tr>
                <br />

                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label>
                        <br />
                        <input
                            type="date"
                            id="wd-available-from"
                            value="2024-05-06" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                        <br />
                        <input
                            type="date"
                            id="wd-available-until"
                            value="2024-05-20" />

                    </td>
                </tr>
                <br />
            </table>
            <hr />

            <table width="100%">
                <tr>
                    <td align="right" valign="top">
                        <button>Cancel</button> <button>Save</button>
                    </td>
                </tr>
            </table>

        </div>
    );
}



