import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Navbar from "./pages/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AdminHome from "./pages/admin/Home";
import PlayersList from "./pages/admin/playersList/PlayersList";
import UserError404 from "./pages/UserError404";
import SideNav from './pages/admin/sideNav/SideNav';
import ReactDOM from "react-dom";

function App() {
  const isAdmin = true;
  if(!isAdmin){
    return (
      <>
        <Navbar />
        <Routes>
  
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          {/* not found */}
          <Route path='*' element={<UserError404 />}/>
  
        </Routes>
      </>
    );
  }
  else{
    return (
      <>
        <Routes>
          <Route path='/' render={()=><AdminHome/>}/>
          {/* <Route exact path='admin' element={<AdminHome/>}>
            <Route index element={<AdminHome />} />
            <Route path='players-list' element={<PlayersList/>}/>

            {/* not found 
            <Route path='*' element={<UserError404 />}/>
          </Route> */}
  
        </Routes>
      </>
    );
  }
  
}

export default App;
