import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
    </BrowserRouter>
  );
}