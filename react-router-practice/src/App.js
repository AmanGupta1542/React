import React from "react";
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Error from "./pages/Error";

import Nav from './pages/components/Nav';

const App = () => {
    const Name = () => {
      return <h1>My name is Aman.</h1>;
    }
    return (
      <>
      {/* Routes ka use karke ham jis path par jaygy bahi element load hoga bas */}
      {/* In old react-router-dom we have this */}
      {/* <Switch>
          <Route path="/" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> */}

        {/* but in new react-router dom Switch is replaced with Routes and component={About} is replaced
        witn element={<About />} */}
        <Nav />
        <Routes>
          {/* exact means yadi path / hai tabhi ye dikaho kyoki har path me / to hota hi h */}
          <Route exact path="/" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/contact/name" element={<Name />} />
          {/* if no routes found then error page */}
          {/* <Route path="*" element={<Error />} /> */}

          {/* yadi error page ki jagah koi or page pr redirect karana ho to */}
          <Route path="*" element={<Contact />} />

        </Routes>
      </>
    );
}

export default App;