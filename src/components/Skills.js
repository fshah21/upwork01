
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

export default function Skills() {
  return (
    <section id="skills">
       <div className="container mx-auto flex flex-col items-center">
        <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center">
          Skills
        </button>
      <div className="container px-5 py-2 mx-auto">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
            The skills and technologies I am really good at.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {imageList.map((image, index) => (
            <img className="h-14 w-14 m-3" key={index} src={image} alt={`image-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}