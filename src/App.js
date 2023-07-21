import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Datapage from "./pages/Datapage";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './css/Contact.css'
// import './css/Footer.css'
// import './css/Homepage.css'
// import './css/Navbar.css'
import Navbarr from './components/Navbar'
function App() {
  return (
    <>
    {/* <Navbar/> */}
      <BrowserRouter>
      <Navbarr/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Datapage" element={<Datapage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
