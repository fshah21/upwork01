import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Experience() {
    return (
      <section id="experience" className="text-gray-400 bg-gray-900 body-font">
       <div className="text-center mb-2">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experience
          </h1>
        </div>
        <div className="container px-5 py-2 mx-auto flex-col justify-center items-center">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center mb-10">
            Here is a quick summary of my most recent experiences:
          </p>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:h-30 lg:w-72 p-10 object-cover" src={`${process.env.PUBLIC_URL}/delloite.png`} alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Graduate Consultant</h5>
                <ul>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Collaborate with 
                cross-functional teams to integrate UKG Dimensions, a leading HR technology platform</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Support the integration of HR 
                technology platforms for improved performance.</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Conduct assessments and testing 
                on recommend technology-enabled solutions</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Assist in change management 
                initiatives and project management activities</li>
                </ul>
            </div>
          </div>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:h-30 lg:w-72 p-10 object-cover" src={`${process.env.PUBLIC_URL}/health.png`} alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Service Desk Analyst</h5>
                <ul>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Dealing with various types of 
                clients and being able to handle different situations that arise</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Documented and logging requests 
                in the incident management system</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Identify user problems and 
                provide a solution for a positive outcome</li>
                </ul>            
              </div>
          </div>
          <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10">
            <img class="rounded-t-lg lg:h-30 lg:w-72 p-10 object-cover" src={`${process.env.PUBLIC_URL}/omnitech.png`} alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Retail assistant and mobile / laptop repairs</h5>
                <ul>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Experience in customer service 
                and stocking</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Dealing with customer queries 
                and complaints</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Inspect devices and 
                troubleshoot problems</li>
                <li class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400">Ordered stock and overseen 
                deliveries</li>
                </ul>            
            </div>
          </div>
        </div>
      </section>
    );
  }