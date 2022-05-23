import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./pages/About";
import User from "./pages/User";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <About /> }/>
        {/* using parameter in user route */}
        {/* <Route path="/user/:name" element={ <User /> }/> */}

        {/* yadi 2 pass karna ho to  */}
        <Route path="/user/:fname/:lname" element={ <User /> }/>

        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/services" element={ <Services /> }/>
        <Route path="*" element={ <Error404 /> }/>
      </Routes>
    </>
  );
}

export default App;
