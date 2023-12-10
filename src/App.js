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
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import BlogPosts from "./components/BlogPosts";
import ProjectPosts from "./components/ProjectPosts";
import CTFPosts from "./components/CTFPosts";
import EachBlogPost from "./components/EachBlogPost";
import GithubBlogPost from "./components/GithubBlogPost";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/upwork01' element={<Home/>} />
              <Route path='/upwork01/login' element={<Login/>} />
              <Route path='/upwork01/blog' element={<BlogPosts />} />
              <Route path='/upwork01/project' element={<ProjectPosts />} />
              <Route path='/upwork01/ctf' element={<CTFPosts />} />
              <Route path='/upwork01/blog-detailed-post' element={<EachBlogPost />} />
              <Route path='/upwork01/github-detailed-blog-post' element={<GithubBlogPost />} />
          </Routes>
    </BrowserRouter>
  );
}