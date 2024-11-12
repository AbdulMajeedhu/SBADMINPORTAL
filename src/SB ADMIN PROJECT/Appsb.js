import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css'

import React, {useState} from 'react'
import Topbar from './SB ADMIN PROJECT/Topbar';
import Sidebar from './SB ADMIN PROJECT/Sidebar';
import './startbootstrap.css';
import Dashboard from './SB ADMIN PROJECT/Dashbord';
import User from './SB ADMIN PROJECT/User';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Product from './SB ADMIN PROJECT/Product';
import Createuser from './SB ADMIN PROJECT/CreateUser';

function App() {
  return (
    <BrowserRouter>
        <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar />
                <div className='container-fluid'>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/utilities" element={<User />} />
                        <Route path="/utilities/create" element={<Createuser />} />
                        <Route path="/Components" element={<Product />} /> 
                    </Routes>
                </div>
            </div>
        </div>
    </div>
    </BrowserRouter>
);

}
 
export default App;
