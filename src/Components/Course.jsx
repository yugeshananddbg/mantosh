import React, { useState, useEffect } from "react";
import "./course.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Button } from "@mui/material";
const courseData = [
  {
    id: 1,
    Name: "MCA",
    Author: "Mantosh",
  },
  {
    id: 2,
    Name: "BCA",
    Author: "Mantosh",
  },
  {
    id: 3,
    Name: "BSc",
    Author: "Mantosh",
  },
];

const Course = () => {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");
  const [author, setAuthor] = useState("");
  const saveHandler = () => {
    courseData.push({ id: courseData.length+1, Name: course, Author: author });
    setEdit(false);
  };
  useEffect(() => {}, [courseData]);

  const handleClose = () => {
    setEdit(false);
  };
  return (
    <div>
      <div className="courseTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Course Name</th>
              <th scope="col">Author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course) => (
              <tr>
                <th scope="row">{course.id}</th>
                <td>{course.Name}</td>
                <td>{course.Author}</td>
                <td>
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success" onClick={() => setEdit(true)}>
          Add new Course
        </button>
        {edit ? (
          <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Add New Course</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter course details</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="Course"
                label="Enter Course Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setCourse(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                label="Enter Author Name"
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <button className="btn btn-success" onClick={saveHandler}>
                Save
              </button>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Course;
