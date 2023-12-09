import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

const skills = ["React, Nodejs"];

export default function Experience() {
    return (
      <section id="experience" className="text-gray-400 bg-gray-900 body-font">
        <div className="text-center mb-2">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work
          </h1>
        </div>
        <div className="container px-5 py-2 mx-auto flex-col justify-center items-center">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center mb-10">
            Some of the noteworthy projects that I have built:
          </p>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10 p-4">
            <img class="rounded-t-lg lg:w-1/2 p-20" src={`${process.env.PUBLIC_URL}/upwork.png`} alt="upwork"/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Fiskil</h5>
                <p class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div class="items-baseline">
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                </div>
            </div>
          </div>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:w-1/2 p-20" src={`${process.env.PUBLIC_URL}/upwork.png`} alt="upwork"/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Fiskil</h5>
                <p class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div class="items-baseline">
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                </div>
            </div>
          </div>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:w-1/2 p-20" src={`${process.env.PUBLIC_URL}/upwork.png`} alt="upwork"/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Fiskil</h5>
                <p class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>           
                <div class="items-baseline">
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                  <p class="text-black px-4 py-2 m-2 rounded-full bg-gray-200 inline-flex text-xs">React.js</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }