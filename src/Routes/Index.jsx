import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import From from "../components/pages/From";
import AddPost from "../components/pages/AddPost";
import Single from "../components/pages/Single";
import Navbar from "../components/common/Navbar";
const Index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/from" element={<From />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/addpost/:id" element={<p>Hellp page</p>} />
      </Routes>
    </div>
  );
};

export default Index;
