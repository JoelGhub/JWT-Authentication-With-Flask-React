import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/home.css";
import { Formik, Field, Form } from 'formik';

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };


	return (
		<div className="text-center">
    
     {(store.auth && store.auth !="" && store.auth != undefined) ? <Navigate to="/demo" />  : 
        <form style={{}} className="h-50 w-50 m-auto bg-dark" onSubmit={handleSubmit}>
        <h3 className="text-light">Login here <i className="text-light fa fa-sign-in" aria-hidden="true"></i></h3>
        <label className="p-2 text-light" htmlFor="email">Email</label>
        <input className="border border-primary m-auto w-50 form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} name="email"  />

        <label className="p-2 text-light " htmlFor="password">Password</label>
        <input className="border border-primary m-auto w-50 form-control" onChange={(e) => setPassword(e.target.value)} id="password" name="password" />

        <button style={{borderRadius:"30px"}} className="w-50 m-4 p-2 bg-danger text-light" type="submit">Submit</button>
      </form>
      }
      

  </div>
	);
};
