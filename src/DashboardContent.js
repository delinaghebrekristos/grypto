import React, { Component } from "react";
import Topbar from "./components/Topbar";
import history from "./history";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Dashboard.css";
import Home from "./pages/home";

function DashboardContent(){
  return(
    <div className="Dashboard">
      <Topbar></Topbar>

      <div className="container">
        <Sidebar/>
        <Home/>
      </div>

    </div>
  )
}
export default DashboardContent;

