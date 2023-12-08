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
import BlogPosts from "./components/BlogPosts";
import ProjectPosts from "./components/ProjectPosts";
import CTFPosts from "./components/CTFPosts";
import EachBlogPost from "./components/EachBlogPost";

export default function App() {
  return (
      <BrowserRouter basename="/upwork01">
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/blog' element={<BlogPosts />} />
              <Route path='/project' element={<ProjectPosts />} />
              <Route path='/ctf' element={<CTFPosts />} />
              <Route path='/blog-detailed-post' element={<EachBlogPost />} />
          </Routes>
    </BrowserRouter>
  );
}