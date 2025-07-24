import React from "react";
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


export default function ContactSection() {
  return (
    <section className=" text-[#b2bec3] px-6 md:py-15 mb-10 py-40">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-wide">
          GET IN TOUCH
        </h2>
        <p className="text-gray-400 mb-8">
          Have a project in mind or just want to say hi? My inbox is always open!
        </p>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <a
            href="mailto:shubh@example.com"
            className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-xl" />
            shubhujala.code@gmail.com
          </a>
          <a
            href="https://x.com/shubhXc0de"
            className="flex items-center gap-3 text-lg hover:text-sky-400 transition"
          >
            <FaTwitter className="text-xl" />
            DM on Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/shubhujala/"
            className="flex items-center gap-3 text-lg hover:text-sky-400 transition"
          >
            <FaLinkedin className="text-xl" />
            Connect on LinkedIn
          </a>
          <a
            className="flex items-center gap-2 cursor-pointer text-lg hover:text-sky-400 transition"
          >
            <MdLocationOn className="text-xl " />
            Jalandhar,Punjab
          </a>

          
        </div>
      </div>
    </section>
  );
}
