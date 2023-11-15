import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col items-center">
            <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center">
             Get in Touch
            </button>
        </div>
      <div className="container px-5 py-2 mx-auto">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-2/4 md:w-2/4 mx-auto text-center">
            What's next? Feel free to reach out to me if you're looking for a developer, have a query, 
            or simply want to connect. 
          </p>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-2/4 md:w-2/4 mx-auto text-center mb-20">
            You may also find me on these platforms!
          </p>
        </div>
    </section>
  );
}