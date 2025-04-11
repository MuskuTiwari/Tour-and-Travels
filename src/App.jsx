import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tour from "./pages/Tour/Tour";
import Destination from "./pages/Destination/Destination";
import Blog from "./pages/Blog/Blog";
import AboutUs from "./pages/Pages/AboutUs";
import TeamMember from "./pages/Pages/TeamMember";
import Gallery from "./pages/Pages/Gallery";
import TermsAndConditions from "./pages/Pages/TermsAndConditions";
import HelpCenter from "./pages/Pages/HelpCenter";
import Dashboard from "./AdminDashboard/Dashboard";
import MyBooking from "./AdminDashboard/MyBooking";
import MyListing from "./AdminDashboard/MyListing";
import AddTour from "./AdminDashboard/AddTour";
import MyFavorite from "./AdminDashboard/MyFavorite";
import MyProfile from "./AdminDashboard/MyProfile";
import Login from "./AdminDashboard/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/team" element={<TeamMember />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/helpcenter" element={<HelpCenter />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/mybooking" element={<MyBooking />} />
      <Route path="/mylisting" element={<MyListing />} />
      <Route path="/addtour" element={<AddTour />} />
      <Route path="/myfavorite" element={<MyFavorite />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/login" element={<Login />} />
      
 
    </Routes>
  );
}

export default App;
