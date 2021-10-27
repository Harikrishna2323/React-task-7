import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";

const AddUser = ({ users }) => {
  const [user, setUser] = useState({
    name: "",
    position: "",
    office: "",
    age: "",
    salary: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // const [name, setName] = useState('');
  // const [position, setPosition] = useState('');
  // const [office, setOffice] = useState('');
  // const [age, setAge] = useState('');
  // const [salary, setSalary] = useState('');
  const history = useHistory();

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  const { name, position, office, age, salary } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://609e2a6033eed80017957ded.mockapi.io/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    history.goBack();
  };

  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Required"),

    position: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Required"),

    office: Yup.string()
      .min(3, "Must be minimum 3 charecters")
      .required("Required"),

    age: Yup.number()
      .required("Please supply your age")
      .min(18, "You must be at least 18 years")
      .max(60, "You must be at most 60 years"),

    salary: Yup.number()
      .min(25000, "Minimum salary required")
      .required(" Please enter minimun salary."),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          position: "",
          office: "",
          age: "",
          salary: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div>
            <h1 className="my-4 font-weight-bold-display-4">Sign up</h1>

            <Form>
              <TextField
                label="Name"
                name="name"
                value={name}
                type="text"
                onChange={(event) => {
                  onInputChange(event);
                }}
              />
              <TextField
                label="Position"
                name="position"
                value={position}
                type="text"
                onChange={(event) => {
                  onInputChange(event);
                }}
              />
              <TextField
                label="Office"
                name="office"
                value={office}
                type="text"
                onChange={(event) => {
                  onInputChange(event);
                }}
              />
              <TextField
                label="Age"
                name="age"
                type="text"
                value={age}
                onChange={(event) => {
                  onInputChange(event);
                }}
              />
              <TextField
                label="Salary"
                name="salary"
                type="text"
                value={salary}
                onChange={(event) => {
                  onInputChange(event);
                }}
              />
              <button
                className="btn btn-dark mt-3"
                type="submit"
                onClick={(event) => {
                  onSubmit(event);
                  console.log(user);
                  console.log(users);
                }}
              >
                Add
              </button>
              <button className="btn btn-danger mt-3 ml-3" type="reset">
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
    // <div>
    //     <Button variant="contained" color="primary"
    //     onClick={()=>{
    //         history.goBack();
    //     }}>
    //         Go Back
    //     </Button>
    //     <form onSubmit={e => onSubmit(e)}>
    //     <div className="form-group">
    //         <label for="exampleInputEmail1">Name</label>
    //         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name"
    //         value={name}
    //         onChange={(e)=>{
    //             onInputChange(e)
    //         }}></input>
    //     </div>

    //     <div className="form-group">
    //         <label for="exampleInputPassword1">Position</label>
    //         <input type="text" className="form-control" id="exampleInputPassword1" placeholder="position" name="position"
    //         value={position}
    //         onChange={(event)=>{
    //             onInputChange(event)
    //         }}></input>
    //     </div>

    //     <div className="form-group">
    //         <label for="exampleInputEmail1">Office</label>
    //         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="office" name="office"
    //         value={office}
    //         onChange={(event)=>{
    //             onInputChange(event);
    //         }}></input>
    //     </div>

    //     <div className="form-group">
    //         <label for="exampleInputEmail1">Age</label>
    //         <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter age" name="age"
    //         value={age}
    //         onChange={(event)=>{
    //             onInputChange(event);
    //         }}></input>
    //     </div>

    //     <div className="form-group">
    //         <label for="exampleInputEmail1">Salary</label>
    //         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter salary" name="salary"
    //         value={salary}
    //         onChange={(event)=>{
    //             onInputChange(event);
    //         }}></input>
    //     </div>

    //     <div className="form-group form-check">
    //         <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    //         <label className="form-check-label" for="exampleCheck1">Check me out</label>
    //     </div>
    //     <button type="submit" className="btn btn-primary"
    //     onClick={(event)=>{
    //         onSubmit(event);
    //         console.log(user);
    //         console.log(users);
    //     }}>Submit</button>
    //     </form>
    // </div>
  );
};
export default AddUser;
