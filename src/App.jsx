import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Customers from "./components/customers";
import  ERPsoftware from "./components/services/ERPsoftware";
// import Branding from "./components/services/Branding";
import BusinessBrading from "./components/services/BusinessBranding";
import DigitalMarketingSEO from "./components/services/DigitalMarketingSEO";
import Hardwaresolutions from "./components/services/Hardwaresolutions";
import MobileApp from "./components/services/MobileApp";
import WebsiteWebApplication from "./components/services/WebsiteWebApplication";
import ProductTutorials from "./components/faq/ProductTutorials";
import ProductVideo from "./components/faq/ProductVideo";
import QuestionChatBoats from "./components/faq/QuestionChatBoats";
import WhatsappSupports from "./components/faq/WhatsappSupports";


import Login from './components/login';
import Admin from './components/admin';
import Career from './components/Career';
import Signinlogin from './components/signin'
import HealthCare from './components/software/HealthCare';
import Hospitality from './components/software/Hospitality';
import Institution from './components/software/Institution';
import Inventory from './components/software/Inventory';
import Restaurant from './components/software/Restaurant'
import Pharmacy from './components/software/Pharmacy';
import Aboutimc from './components/company/aboutimc';
import Supports from './components/company/supports';
import Becomepartner from './components/company/becomepartners'
import Task from './components/software/task';
import Auric from './components/software/Auric'
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsandConditions  from './components/TermsandConditions';
import RefundPolicy from './components/RefundPolicy';
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
        <Route path="/digitalmarketing" element={<DigitalMarketingSEO />} />
        <Route path="/erpsoftware" element={<ERPsoftware />} />
        <Route path="/hardwaresolutions" element={<Hardwaresolutions />} />
        <Route path="/businessBranding" element={<BusinessBrading />} />
        <Route path="/productVideo" element={<ProductVideo />} />
        <Route path="/productTutorials" element={<ProductTutorials />} />
        <Route path="/questionChatBoats" element={<QuestionChatBoats />} />
        <Route path="/whatsappSupports" element={<WhatsappSupports />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/company" element={<Company />} /> */}
        {/* <Route path="/software" element={<Software />} /> */}
        {/* <Route path="/business" element={<Business />} /> */}
        <Route path="/login@IMCBSLLP" element={<Login />} />
        
        <Route path="/admin@IMCBSLLP" element={<Admin />} />
        <Route path='/signinlogin' element={<Signinlogin/>}/>
        {/* <Route path="/addproduct" element={<Addproduct />} /> */}
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/career" element={<Career />} />
        <Route path="/aboutimc" element={< Aboutimc/>} />
        <Route path="/supports" element={< Supports/>} />
        <Route path="/becomepartner" element={< Becomepartner/>} />
        <Route path="/task/:productId" element={<Task />} />
        <Route path="/auric" element={<Auric/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termsandconditions" element={<TermsandConditions/>}/>
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
      </Routes>
    </>
  );
}

export default App;
