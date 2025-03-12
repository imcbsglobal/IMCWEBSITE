import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Customers from "./components/customers";
import Branding from "./components/services/Branding";
import BusinessBrading from "./components/services/BusinessBranding";
import DigitalMarketingSEO from "./components/services/DigitalMarketingSEO";
import GraphicsCreatives from "./components/services/GraphicsCreatives";
import MobileApp from "./components/services/MobileApp";
import WebsiteWebApplication from "./components/services/WebsiteWebApplication";
import ProductTutorials from "./components/faq/ProductTutorials";
import ProductVideo from "./components/faq/ProductVideo";
import QuestionChatBoats from "./components/faq/QuestionChatBoats";
import WhatsappSupports from "./components/faq/WhatsappSupports";
import Company from "./components/company";
// import Software from "./components/software";
// import Business from "./components/business";
import Login from './components/login';
import Admin from './components/admin';
import AddUser from './components/adduser';
import Signinlogin from './components/signin'
import HealthCare from './components/software/HealthCare';
import Hospitality from './components/software/Hospitality';
import Institution from './components/software/Institution';
import Inventory from './components/software/Inventory';
import Restaurant from './components/software/Restaurant'
import Pharmacy from './components/software/Pharmacy';
// import Addproduct from './components/addproduct'
function App() {
  return (
    <Router>
      <AppWithRouting />
    </Router>
  );
}

const AppWithRouting = () => {
  const location = useLocation();

  // Hide Navbar for these routes
  const hideNavbarRoutes = ['/login', '/admin','/addproduct'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/websiteandWebApplications" element={<WebsiteWebApplication />} />
        <Route path="/mobileApp" element={<MobileApp />} />
        <Route path="/digitalmarketingandSEO" element={<DigitalMarketingSEO />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/graphicsandCreatives" element={<GraphicsCreatives />} />
        <Route path="/businessBranding" element={<BusinessBrading />} />
        <Route path="/productVideo" element={<ProductTutorials />} />
        <Route path="/productTutorials" element={<ProductVideo />} />
        <Route path="/questionChatBoats" element={<QuestionChatBoats />} />
        <Route path="/whatsappSupports" element={<WhatsappSupports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        {/* <Route path="/software" element={<Software />} /> */}
        {/* <Route path="/business" element={<Business />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path='/signinlogin' element={<Signinlogin/>}/>
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/addproduct" element={<Addproduct />} /> */}
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
      </Routes>
    </>
  );
}

export default App;
