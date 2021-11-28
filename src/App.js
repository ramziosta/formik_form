import React from "react";
// TODO: import useFormik from formik library
import "../src/index.css"
import {useFormik} from "formik"
import Navbar from "./Navbar"


export default function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors={};
      // if(!values.name) errors.name = "Name Field is required"
      if(!values.email) errors.email = "Username should be an email format"
      if(!values.password) errors.password = "Password Field is required"
      if(values.password && values.email) alert('Login Successful!') 
      return errors;
    }
  })
  return (
   
    <div onSubmit={formik.handleSubmit}>
     <Navbar />
    <main>
      <form className="form">
        {/* <div>Name</div>
        <input type="text" name="name" onChange={formik.handleChange} values={formik.values.name} placeholder="Enter name" />
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : "Login Successful"}
 */}

        <div className="form-group">User Name:</div>
        <input type="email" name="email" onChange={formik.handleChange} values={formik.values.email} placeholder="Enter Email for UserName" id="emailField" className="form-input" />
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}

        <div className="form-group">Password:</div>
        <input type="text" name="password" onChange={formik.handleChange} values={formik.values.password} placeholder="Enter Password" id="pswField" className="form-input" />
         {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}

        <button type="submit" id="submitBtn">Submit</button>
      </form>
      </main>
    </div>
  );
}

