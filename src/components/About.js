import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Feya.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Armed with a Bachelor's degree in Engineering from Mumbai and a Master's in Computer Science from the 
          prestigious University of Southern California, I bring a solid foundation of knowledge and expertise to the 
          realm of software development.

          <br/>
          <br/>

          As a freelance software engineer, I am dedicated to providing personalized and client-centric services. 
          Whether you're looking to build a dynamic website, develop a robust web application, or enhance your digital 
          presence, I am here to collaborate and bring your ideas to life. Let's embark on a journey of innovation and 
          create something extraordinary together. Explore my portfolio, and let's discuss how we can turn your software 
          dreams into reality.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./website-logo.png"
          />
        </div>
      </div>
    </section>
  );
}