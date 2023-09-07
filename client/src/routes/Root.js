import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Root
