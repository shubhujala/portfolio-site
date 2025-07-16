import React from "react";
import Footer from "../Footer/footer";
const projects = [
  {
    title: "Citizen Grievance Redressal System",
    type: "College Project",
    date: "April 2025",
    description:
      "A full-stack grievance management web application allowing citizens to register complaints, with admin functionality to manage and close grievances. Includes escalation management, analytics, and real-time status tracking",
    technologies: [
      "PHP", "MySQL", "JavaScript", "AJAX", "HTML",
      "Tailwind CSS"
    ],
    repo: "https://github.com/Shubh-ujala/dev_Project",
  },
  {
    title: "Currency Converter",
    type: "Personal Mini Project",
    date: " June 2025",
    description:
      "A React-based currency converter that fetches real-time exchange rates using a public currency API and converts between user-selected currencies.",
    technologies: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    repo: "https://github.com/Shubh-ujala/Backend_dev/tree/main/React/currencyConverter",
  },
  {
    title: "Chatting App",
    type: "Real-time Web Application",
    date: " June 2024",
    description:
      "A real-time messaging app allowing one-on-one conversations. Includes live message sending and receiving.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js","Socket.io","Express.js"],
    repo: "https://github.com/Shubh-ujala/30-Days_JavaScript_Challange/tree/main/Day_26_Project_03",
  }
];


export default function ProjectsGrid() {
  return (
    <section className=" md:mx-15 md:mt-10 text-white px-4 ">
      <div className="flex flex-wrap -mx-3">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 px-3 mb-6"
          >
            <div className="flex flex-col h-full justify-between bg-gray-700/70  border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition duration-300">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{proj.title}</h3>
                    <p className="text-sm text-gray-400">{proj.type}</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full whitespace-nowrap">
                    {proj.date}
                  </span>
                </div>

                <p className="text-sm text-gray-300 mb-4">{proj.description}</p>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Technologies:</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 border border-gray-600 rounded-md bg-gray-800 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-400 hover:underline"
                >
                  View Repository → 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
}
