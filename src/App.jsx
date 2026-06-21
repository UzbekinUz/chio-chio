import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/nav";
import Mainbody from "./pages/mainBody";
import Features from "./pages/features";
import Booking from "./pages/booking";
import Price from "./pages/price";
import Imges from "./pages/imges";
import Location from "./pages/location";
import { useState } from "react";

export default function ChioChioTashkent() {
  const [activeTab, setActiveTab] = useState('Bosh sahifa');
  // Bron tizimi uchun dinamik state'lar
  return (
    <div className="min-h-screen bg-[#edece7] text-[#1a2e40] font-sans antialiased selection:bg-[#e5004f] selection:text-white">
      
      {/* 1. BRAND NAVIGATION HEADER */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>

      {/* 2. HERO MAIN BANNER */}
      <Mainbody activeTab={activeTab}/>

      {/* 3. UNIQUE FEATURES BENEFITS GRID */}
      <Features/>

      {/* 4. REALTIME ADVANCED 4-TABLES BOOKING ENGINE */}
      <Booking/>

      {/* 5. PRECISE PRICE LIST COMPONENT */}
      <Price/>

      {/* 6. PORTFOLIO MATRIX IMAGES */}
      <Imges/>

      {/* 7. REVIEWS & GEOLOCATION NAVIGATION */}
      {/* <Location/> */}

      {/* FOOTER */}
      <Footer/>

    </div>
  );
}