import React from "react";
import TableData from '../Users/TableData';
import Register from './Register';
import Login from './Login';
import Cards from './Cards';
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Buttons from "./Buttons";
import Home from './Home';
import Charts from './Charts';
import Page404 from './Page404';
import Colors from './Colors';
import Borders from './Borders';
import Animations from './Animations';
import Others from './Others';
import Blank from './Blank';



         
const Navbar = () =>{

    return(
        
        <div className="wrapper" id="wrapper">

 
        <Router>

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        

            
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

           
            <hr className="sidebar-divider my-0" />

            <Link to="/" className="nav-item active">
                <a className="nav-link" ></a>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
            </Link>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>
            

            <li className="nav-item">
                <a to="/buttons" className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link to ="/buttons" className="collapse-item" href="/buttons">Buttons</Link>
                        <Link to="/cards" className="collapse-item" href="/cards">Cards</Link>
                    </div>
                </div>
            </li>
           

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link to="/utilities-colors" className="collapse-item" >Colors</Link>
                        <Link to="/utilities-borders" className="collapse-item" >Borders</Link>
                        <Link to="/utilities-animations" className="collapse-item" >Animations</Link>
                        <Link to="/utilities-others" className="collapse-item" >Other</Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Addons
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link to="/login" className="collapse-item" >Login</Link>
                        <Link to="/register" className="collapse-item" >Register</Link>
                        <Link to="/forgotpassword" className="collapse-item" >Forgot Password</Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link to="/page404" className="collapse-item" >404 Page</Link>
                        <Link to="/blank" className="collapse-item" >Blank Page</Link>
                    </div>
                </div>
                
            </li>

            <Link to="/charts" className="nav-item">
                <a className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </Link>

            <li className="nav-item">
                <Link to="/users" className="nav-link" >
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>


            <hr className="sidebar-divider d-none d-md-block"></hr>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." ></img>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
            

        </ul>


        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            <Switch>
                <Route path="/buttons">
                    <Buttons />
                </Route>
            </Switch>

            <Switch>
                <Route path="/cards">
                    <Cards />
                </Route>
            </Switch>

            <Switch>
                <Route path="/users">
                    <TableData />
                </Route>
            </Switch>

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>

            <Switch>
                <Route path="/forgotpassword">
                    <ForgotPassword />
                </Route>
            </Switch>

            <Switch>
                <Route path="/charts">
                    <Charts />
                </Route>
            </Switch>

            <Switch>
                <Route path="/page404">
                    <Page404 />
                </Route>
            </Switch>

            <Switch>
                <Route path="/blank">
                    <Blank />
                </Route>
            </Switch>

            <Switch>
                <Route path="/utilities-colors">
                    <Colors />
                </Route>
            </Switch>

            <Switch>
                <Route path="/utilities-borders">
                    <Borders />
                </Route>
            </Switch>

            <Switch>
                <Route path="/utilities-animations">
                    <Animations />
                </Route>
            </Switch>

            <Switch>
                <Route path="/utilities-others">
                    <Others />
                </Route>
            </Switch>


        </div>
            

        </Router>

        </div>
 

    )
}
export default Navbar;
