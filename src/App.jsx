import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContent from "./components/HomeContent";
import CompanyProfile from "./components/CompanyProfile";
import About from "./components/About";
import Practice from "./components/Practice";
import GlobalOperations from "./components/GlobalOperations";
import Innovation from "./components/Innovation";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Sustainability from "./components/Sustainability";



function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeContent />}></Route>
          <Route path="/companyprofile" element={<CompanyProfile />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/globaloperations" element={<GlobalOperations />}></Route>
          <Route path="/innovation" element={<Innovation />}></Route>
          <Route path="/sustainability" element={<Sustainability />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Route>
      </Routes>
    </Router >

    // <div>
    //   <Practice />
    // </div>
    // <div>
    //   <Index />
    // </div>

  )
}

export default App
