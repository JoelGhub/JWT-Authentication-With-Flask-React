import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Login Test with JWRT</span>
				</Link>
				<div className="ml-auto">
          	<Link to="/demo">
            {store.auth === true ? (
              <button
                className="btn btn-primary"
                onClick={() => actions.logout()}
              >
				<Link to="/" className="btn btn-primary">
				Logout
				</Link>
                
              </button>
            ) : (
				<button className="btn btn-primary">
              <Link to="/" className="btn btn-primary">
                Login
              </Link>
			  </button>
            )}
         	</Link>
       		 </div>
			</div>
		</nav>
	);
};
