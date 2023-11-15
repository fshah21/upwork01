
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { technologies } from "../data";

export default function Skills() {
  return (
    <section id="skills">
       <div className="container mx-auto flex flex-col items-center">
        <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center">
          Skills
        </button>
      <div className="container px-5 py-2 mx-auto mb-10">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
            The skills and technologies I am really good at.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 mb-10">
           {technologies.map((tech) => (
               <div className="block">
                 <img
                 alt="gallery"
                   className="w-14 h-14 m-5 align-center"
                   src={tech.image}
                 />
                  <h1 className="text-center text-white">
                     {tech.name}
                   </h1>
               </div>
           ))}
         </div>     
      </div>
    </section>
  );
}