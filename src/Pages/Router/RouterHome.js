import { React, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmployeeForm from "../EmployeeForm";
import AllEmployees from "../AllEmployees"


function RouterHome() {
  




 
  return (
    
    <Routes>
      
      <Route path="/" element={<AllEmployees />} />
      <Route path="/employee/new" element={<EmployeeForm />} />
        <Route path="/employee/:id" element={<EmployeeForm />} />
    </Routes>
  );
}




export default RouterHome;
