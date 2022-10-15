import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
//import Register from './components/Register';
import Login from "./components/Login";
import Employees from "./components/Employees";
import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState(Employees);

  console.log(employee);
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home employeeList={employee} />}></Route>
            <Route
              path="/create"
              element={<Add setEmployee={setEmployee} />}
            ></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
