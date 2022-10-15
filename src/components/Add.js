//rafce
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Add = (props) => {
  const { setEmployee } = props;

  const schema = yup.object().shape({
    formFirstName: yup.string().required("zz"),
    formLastName: yup.string().required(),
    formEmail: yup.string().email().required(),
    formAge: yup.number().positive().integer().required(),
    formSalary: yup.number().positive().integer().required(),
    formDate: yup.date().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const { register } = useFormContext(); // retrieve all hook methods

  const doSubmit = (data) => {
    console.log(data);
  };

  let history = useNavigate();

  const onSubmit = (data) => {
    // e.preventDefault();

    console.log("working", data);

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    // const date = new Date(data.formDate);

    const newEmployee = {
      id: uniqueId,
      FirstName: data.formFirstName,
      LastName: data.formLastName,
      Age: data.formAge,
      Email: data.formEmail,
      Salary: data.formSalary,
      Date: data.formDate.toLocaleDateString(),
    };

    setEmployee((prev) => {
      return [...prev, newEmployee];
    });
    history("/");
  };

  const onError = (errors) => {
    console.log("error", errors);
  };

  return (
    <>
      <div>
        <Form
          className="d-grid gap-2"
          onSubmit={handleSubmit(onSubmit, onError)}
          style={{ margin: "15rem" }}
        >
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              {...register("formFirstName")}
              // onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
            {errors.formFirstName?.message}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              {...register("formLastName")}
              // onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
            {errors.formLastName?.message}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Control
              type="text"
              placeholder="Enter Age"
              {...register("formAge")}
              // onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
            {errors.formAge?.message}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="text"
              placeholder="Enter Email"
              {...register("formEmail")}
              // onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            {errors.formEmail?.message}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSalary">
            <Form.Control
              type="text"
              placeholder="Enter Salary"
              {...register("formSalary")}
              // onChange={(e) => setSalary(e.target.value)}
            ></Form.Control>
            {errors.formSalary?.message}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Control
              type="date"
              placeholder="Enter Date"
              {...register("formDate")}
              // onChange={(e) => setDate(e.target.value)}
            ></Form.Control>
            {errors.formDate?.message}
          </Form.Group>

          {/* <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Create
          </Button> */}
          <input type="submit" value="Create" />
        </Form>
      </div>
    </>
  );
};

export default Add;
