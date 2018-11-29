import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ani from './Ani';
import './Css/Style.css';

class Application extends React.Component{
  
  render(){
   // let buttonclassName = (this.state.toggled) ? 'toggled' : '';
    return(
     
        <Router>
<div>
       <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
        
        <div className="area">
        
        </div><nav className="main-menu">
            <ul>
                <li>
                    <Link to="/" exact>
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Upcomming Task
                        </span>
                    </Link>
                  
                </li>
                <li className="has-subnav">
                    <Link to="/Profile" >
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                         Lead LIst
                        </span>
                    </Link>
                    
                </li>
                <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-list fa-2x"></i>
                        <span className="nav-text">
                            Application List
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-folder-open fa-2x"></i>
                        <span className="nav-text">
                         My Activities
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-bar-chart-o fa-2x"></i>
                        <span className="nav-text">
                            Fail Leads
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-font fa-2x"></i>
                        <span className="nav-text">
                           Campaning
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i className="fa fa-table fa-2x"></i>
                        <span className="nav-text">
                            Chat list
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <span className="nav-text">
                           Report
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i className="fa fa-info fa-2x"></i>
                        <span className="nav-text">
                           Setting
                        </span>
                    </a>
                </li>
            </ul>

            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        
        <Route path="/profile" component={Ani} />

      </div>

        </Router>
     
    );}}
  
export default Application;
