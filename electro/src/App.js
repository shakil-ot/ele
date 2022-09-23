import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, Layout, Location, CarrierDashboard,Notification,Header } from "./components";
import "./App.css";

import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";


const App =(props) =>{

  return(
    <Router>
      <Routes>
        <Route exact path="/" element={
            <Login/>
            }
        />
        <Route exact path="/home" element={
            <Layout>
            <Location/>
            </Layout>
            }
        />
        <Route exact path="/Cprofile" element={
            <Layout>
            <CarrierDashboard/>
            </Layout>
            }
        />
       
      </Routes>
    </Router>
  );
  
};

export default App;