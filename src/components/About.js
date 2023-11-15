import React from "react";

export default function About() {
  return (
    <section id="about">
      <div>
      <div className="container mx-auto flex px-10 mb-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nehaal Prasad.
          </h1>
          <p className="mb-2 leading-relaxed">
          I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) 
          exceptional digital experiences that are fast, accessible, visually appealing and responsive. Even though I 
          have been creating web applications for over 7 years, I still love it as if it was something new. 
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center mt-20 rounded w-96 h-96 border-4" 
            alt="hero"
            src="./photo1.jpg"
          />
        </div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center mb-30">
        <div className="container mx-auto flex flex-col items-center mb-10">
            <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center">
             About me
            </button>
        </div>
        <div className="container mx-auto flex px-10 mb-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center md:mb-20 rounded-full w-96 h-96 border-4"
            alt="hero"
            src="./photo2.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">
            Curious about me? Here you have it :
          </h1>
          <p className="mb-4 leading-relaxed">
          I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
          I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User 
          experience, pixel perfect design, and writing clear readable, highly performant code matters to me.
          </p>
          <p className="mb-4 leading-relaxed">
            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer,
            taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years
            after starting my web development journey, I'm building cutting-edge web applications using modern technologies
            such as Next.js, Typescript, Nestjs, Tailwindcss, Supabase and much more. 
          </p>
          <p className="mb-4 leading-relaxed">
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
            development.
          </p>
          <p className="mb-4 leading-relaxed">
            When I'm not in full-on developer mode, you can find me hovering around twitter or indie hacker, withnessing 
            the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related 
            bites and build in public, or you can follow me on Github.
          </p>
          <p className="mb-4 leading-relaxed">
            Finally, some quick bits about me. 
          </p>
          <ul className="mb-4 leading-relaxed">
            <li>B.E in Computer Engineering</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Aspiring indie hacker</li>
          </ul>
          <p className="mb-4 leading-relaxed">
            One last thing, I am available for freelance work, so feel free to reach out and say hello! I promise I don't bite. 
          </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}