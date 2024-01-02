import React, { useContext } from 'react';
import { ProvideAuth } from './components/login';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login'
import FindGaster from './FindGaster';
import './App.css'
import Header from './components/Header'
import Economy from './components/economy'
import PrivateRoute from './components/Authenticator';
import CaptainDashboard from './CaptainDashboard';
import Seafares from './components/Seafares';
import SignUpForm from './components/Signup';
import Landingpage from './components/Landingpage';
import NavbarBottom from './components/NavbarBottom';


function App() {
  return (
    <ProvideAuth>
    <>
    
    <Header />
    <Seafares />
    <Routes>
        <Route path="/seafares" element={<Seafares />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
        element={<CaptainDashboard user_name="Sailor John" />} />
        <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  </>
  </ProvideAuth>

  )
}

export default App;
