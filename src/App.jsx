import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Customers from "./components/customers"



import Branding from "./components/services/Branding"
import BusinessBrading from "./components/services/BusinessBranding"
import DigitalMarketingSEO from "./components/services/DigitalMarketingSEO"
import GraphicsCreatives from "./components/services/GraphicsCreatives"
import MobileApp from "./components/services/MobileApp"
import WebsiteWebApplication from "./components/services/WebsiteWebApplication"
import HospitalClinics from "./components/business/HospitalClinics"
import Hotels from "./components/business/Hotels"
import Pharmacies from "./components/business/Pharmacies"
import RestaurantsBusiness from "./components/business/RestaurantsBusiness"
import RetailWholeSale from "./components/business/RetailWholeSale"
import SchoolCollege from "./components/business/SchoolColleges"
import ProductTutorials from "./components/faq/ProductTutorials"
import ProductVideo from "./components/faq/ProductVideo"
import QuestionChatBoats from "./components/faq/QuestionChatBoats"
import WhatsappSupports from "./components/faq/WhatsappSupports"
import SchoolColleges from "./components/business/SchoolColleges"
import Company from "./components/company"  
import Software from "./components/software"  

function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
         
        
          
          
          
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/hospitalClinics" element={<HospitalClinics/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/websiteandWebApplications" element={<WebsiteWebApplication/>}/>
          <Route path="/mobileApp" element={<MobileApp/>}/>
          <Route path="/digitalmarketingandSEO" element={<DigitalMarketingSEO/>}/>
          <Route path="/branding" element={<Branding/>}/>
          <Route path="/graphicsandCreatives" element={<GraphicsCreatives/>}/>
          <Route path="/businessBranding" element={<BusinessBrading/>}/>
          <Route path="/pharmacies" element={<Pharmacies/>}/>
          <Route path="/restaurantBusiness" element={<RestaurantsBusiness/>}/>
          <Route path="/retailWholeSale" element={<RetailWholeSale/>}/>
          <Route path="/schoolColleges" element={<SchoolColleges/>}/>
          <Route path="/productTutorials" element={<ProductTutorials/>}/>
          <Route path="/productVideo" element={<ProductVideo/>}/>
          <Route path="/questionChatBoats" element={<QuestionChatBoats/>}/>
          <Route path="/whatsappSupports" element={<WhatsappSupports/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/software" element={<Software/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
