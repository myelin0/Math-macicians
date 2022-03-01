import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Calculator from './components/calculator';
import Home from './Home';
import Quote from './Quote';

const App = () => (
  <>
    <div>MATH MAGICIANS</div>
    <nav>
      <Link to="/">Home |</Link>
      <Link to="/Quotes">Calculator |</Link>
      <Link to="/Quotes">Quotes |</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Calculator" element={<Calculator />} /> */}
      <Route path="/Quotes" element={<Quote />} />
    </Routes>
  </>
);
export default App;
