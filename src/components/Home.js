import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Experience from "./Experience";
import Work from "./Work";

export default function Home() {
    return (
        <div className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Skills />
            <Experience/>
            <Work/>
            <Contact />
        </div>
    );
}