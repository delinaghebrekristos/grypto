import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import DashboardContent from "../DashboardContent";
import { Link } from "react-router-dom";
import Home from "../pages/home";


const Dashboard = () => {
return (
	<div>       
	    <DashboardContent></DashboardContent>		
	</div>
);
};

export default Dashboard;