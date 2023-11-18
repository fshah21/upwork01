import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {

  const pages = ['blog', 'projects', 'ctf'];

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nehaal Prasad
          </a>
        </a>
        <nav className="md:ml-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <ul className="flex inline">
            {/* <li className="ml-5 hover:text-white">
              <Link to="/"><a href="#about">About</a></Link>
            </li>
            <li className="ml-5 hover:text-white">
              <Link to="/#skills"><a href="#skills">Skills</a></Link>
            </li>
            <li className="ml-5 hover:text-white">
              <Link to="/#experience">Experience</Link>
            </li> */}
            <li className="ml-5 hover:text-white">
            <HashLink to="/#about" smooth={true} duration={500}>
                About
              </HashLink>
            </li>
            <li className="ml-5 hover:text-white">
              <HashLink to="/#skills" smooth={true} duration={500}>
                Skills
              </HashLink>
            </li>
            <li className="ml-5 hover:text-white">
              <HashLink to="/#experience" smooth={true} duration={500}>
                Experience
              </HashLink>
            </li>
          
            <li className="ml-5 hover:text-white">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="ml-5 hover:text-white">
              <Link to="/project">Projects</Link>
            </li>
            <li className="ml-5 hover:text-white">
              <Link to="/ctf">CTF Challenges</Link>
            </li>
            <li className="ml-5 hover:text-white">
              <HashLink to="/#content" smooth={true} duration={500}>
                Content
              </HashLink>
            </li>
            <li className="ml-5 hover:text-white">
              <HashLink to="/#contact" smooth={true} duration={500}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}