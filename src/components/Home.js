import React, { Fragment } from "react";
import { Button, NavItem, Table } from "react-bootstrap";
import Employees from "./Employees";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const { employeeList } = props;

  let history = useNavigate();

  const handleEdit = (id, firstname, lastname, age, email, salary, date) => {
    localStorage.setItem("FirstName", firstname);
    localStorage.setItem("LastName", lastname);
    localStorage.setItem("Age", age);
    localStorage.setItem("Email", email);
    localStorage.setItem("Salary", salary);
    localStorage.setItem("Date", date);

    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    // let index = Employees.map(function(e){
    //     return (
    //         e.id
    //     )
    // }).indexOf(id);
    // Employees.splice(index,1);
    // history('/');
  };
  return (
    <>
      <div>
        <h1>Employee Management System</h1>
      </div>
      <Fragment>
        <div>
          <Link to={`/create`}>
            <Button size="lg">Create Employee</Button>
          </Link>
        </div>
        <div style={{ margin: "10rem" }}>
          <Table border striped bordered hover size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.length > 0
                ? employeeList.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.Age}</td>
                        <td>{item.Email}</td>
                        <td>{item.Salary}</td>
                        <td>{item.Date}</td>
                        <td>
                          <Link to={`/edit`}>
                            <Button
                              onClick={() =>
                                handleEdit(
                                  item.id,
                                  item.FirstName,
                                  item.LastName,
                                  item.Age,
                                  item.Email,
                                  item.Salary,
                                  item.Date
                                )
                              }
                            >
                              Edit
                            </Button>
                          </Link>
                          &nbsp;
                          <Button onClick={() => handleDelete(item.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : "No data found or available"}
            </tbody>
          </Table>
          <br></br>
        </div>
      </Fragment>
    </>
  );
};

export default Home;
