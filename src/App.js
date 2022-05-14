 import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import SignUp from "./Pages/Login/SignUp";
import RequirAuth from './Pages/Login/RequirAuth';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' 
        element={
          <RequirAuth>
            <Appointment></Appointment>
          </RequirAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
