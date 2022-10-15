import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form } from "react-bootstrap";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Edit = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  let index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  //Employees.splice(index,1);

  const handleSubmits = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.FirstName = firstname;
    a.LastName = lastname;
    a.Age = age;
    a.Email = email;
    a.Salary = salary;
    a.Date = date;

    history("/");
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("LastName"));
    setAge(localStorage.getItem("Age"));
    setEmail(localStorage.getItem("Email"));
    setSalary(localStorage.getItem("Salary"));
    setDate(localStorage.getItem("Date"));

    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <>
      <div>
        <Form
          className="d-grid gap-2"
          onSubmit={handleSubmit(onSubmit)}
          style={{ margin: "15rem" }}
        >
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Control
              type="text"
              placeholder="Enter First Name" value={firstname} required
              onChange={(e) => setFirstName(e.target.value)} ></Form.Control>
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastname}
              required
              onChange={(e) => setLastName(e.target.value)} ></Form.Control>
            <small className=""> Last name Required</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Control
              type="text"
              placeholder="Set Age"
              value={age}
              {...register("Age", {
                required: "Age is required",
              })}
              required
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
             {errors.Age && (  <small className=""> Age name Required</small>)}
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            <small className=""> Email Required</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSalary">
            <Form.Control
              type="text"
              placeholder="Enter Salary"
              value={salary}
              required
              onChange={(e) => setSalary(e.target.value)}
            ></Form.Control>
            <small className="">Salary Required</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDAte">
            <Form.Control
              type="text"
              placeholder="Enter date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            ></Form.Control>
            <small className=""> date Required</small>
          </Form.Group>

          <Button onClick={(e) => handleSubmits(e)}>Update</Button>
        </Form>
      </div>
    </>
  );
};

export default Edit;
