import React from "react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Tech Corp",
    duration: "June 2023 - Aug 2023",
    description:
      "Worked on building scalable backend services and improved API response times by 40%.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    duration: "Jan 2022 - May 2023",
    description:
      "Designed and implemented responsive UI components using React and Tailwind CSS.",
  },
  {
    role: "Open Source Contributor",
    company: "Open Source Community",
    duration: "2021 - Present",
    description:
      "Contributed to several open-source projects, focusing on accessibility and performance improvements.",
  },
];

const Experience = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-8 lg:px-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-10 flex flex-col items-center ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* Connector line */}
            <div className="flex items-center sm:justify-end w-full sm:w-1/2">
              <div
                className={`relative ${
                  index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                }`}
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-left">
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-gray-500 italic text-sm">{exp.duration}</p>
                  <p className="mt-3">{exp.description}</p>
                </div>
              </div>
            </div>

            {/* Timeline point */}
            <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center z-10">
              <span className="w-4 h-4 bg-blue-300 rounded-full"></span>
            </div>

            {/* Invisible spacer for alignment */}
            <div className="hidden sm:block w-full sm:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
