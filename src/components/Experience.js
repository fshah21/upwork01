import React from "react";

export default function Experience() {
    return (
      <section id="experience" className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-col items-center">
            <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center">
             Experience
            </button>
        </div>
        <div className="container px-5 py-2 mx-auto flex-col justify-center items-center">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center mb-10">
            Here is a quick summary of my most recent experiences:
          </p>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:h-30 lg:w-52 p-10" src="/upwork.png" alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Sr. Frontend Developer</h5>
                <ul>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</li>
                </ul>
            </div>
          </div>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:h-30 lg:w-52 p-10" src="/upwork.png" alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Team Lead</h5>
                <ul>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</li>
                </ul>            </div>
          </div>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:h-30 lg:w-52 p-10" src="/upwork.png" alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Full Stack Developer</h5>
                <ul>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</li>
                </ul>            
            </div>
          </div>
        </div>
      </section>
    );
  }