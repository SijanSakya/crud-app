//rafce
import React, {useState} from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import {Button , Form} from 'react-bootstrap';
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link , useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const Add = () => {
    const [FirstName, setFirstName ] =useState('');
    const [LastName, setLastName ] =useState('');
    const [Age, setAge ] =useState('');
    const [Email, setEmail] =useState('');
    const [Salary, setSalary ] =useState('');
    const [Date, setDate ] =useState('');


    const schema =yup.object().shape({
        formFirstName : yup.string().required("zz"),
        formlastName : yup.string().required(),
        formEmail : yup.string().email().required(),
        formAge : yup.number().positive(). integer().required(),
        formSalary : yup.number().positive(). integer().required(),
        formDate : yup.date().required()
  });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
 } );
    

 const doSubmit =(data)=>{
    console.log(data);
}
    
    let history = useNavigate();

    // const handleSubmits =(e)=>{
    //    e.preventDefault();

    //   const ids= uuid();
    //   let uniqueId= ids.slice(0,8);
    //    let a = FirstName,
    //      b = LastName,
    //      c = Age,
    //      d= Email,
    //      f=Salary, 
    //      g=Date;

    //    Employees.push({id: uniqueId, FirstName: a ,LastName: b, Age:c, Email:d, Salary:f, Date:g});
    //    history("/");
    // }

    
  return (
    <>
    
    <div>
        <Form className="d-grid gap-2"  onSubmit={handleSubmit(doSubmit)} style = {{margin :"15rem"}}>

            <Form.Group className = "mb-3" controlId="formFirstName">
                <Form.Control type= "text" placeholder="Enter First Name" 
                {...register("formFirstName")}
                required onChange={(e) => setFirstName(e.target.value)}>
                </Form.Control>
                {errors.formFirstName?.message}
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formLastName">
                <Form.Control type= "text" placeholder="Enter Last Name"
                 {...register("formLastName")}
                required onChange={(e) => setLastName(e.target.value)}>
                </Form.Control>
                {errors.formLastName?.message}
            </Form.Group>


            <Form.Group className = "mb-3" controlId="formAge">
                <Form.Control type= "text" placeholder="Enter Age"
                   {...register("formAge")}
                required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
                {errors.formAge?.message}
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formEmail">
                <Form.Control type= "text" placeholder="Enter Email"
                  {...register("formEmail")}
                required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
                {errors.formEmail?.message}
            </Form.Group>

            <Form.Group className = "mb-3" controlId="formSalary">
                <Form.Control type= "text" placeholder="Enter Salary" 
                  {...register("formSalary")}
                required onChange={(e) => setSalary(e.target.value)}>
                </Form.Control>
                {errors.formSalary?.message}
            </Form.Group>
             
            <Form.Group className = "mb-3" controlId="formDate">
                <Form.Control type= "text" placeholder="Enter Date"
                  {...register("formDate")}
                required onChange={(e) => setDate(e.target.value)}>
                </Form.Control>
                {errors.formDate?.message}
            </Form.Group>

           
            <Button type= "submit" >Create</Button>

        </Form>
    </div>
    </>
  )
}

export default Add