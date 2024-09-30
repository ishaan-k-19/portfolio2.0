import React from "react";
import { projects } from "../../data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="bg-neutral-900 text-stone-700">
      <div className="gap-4 w-full h-screen">
        <div className="flex flex-wrap gap-8 justify-around py-8">
          {projects.slice().reverse().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.25, 
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      className="max-w-sm p-6 bg-[#4b4a44] rounded-xl shadow"
      initial="hidden"
      animate="visible"
      custom={index} 
      variants={cardVariants}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.coverpic}
          alt={`${project.title} cover`}
          className="mb-4 rounded-lg"
        />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#d1c8b2]">
          {project.title}
        </h5>
      </a>
      <p className="mb-10 font-normal text-gray-700 dark:text-gray-400 text-sm">
        {project.description}
      </p>
      <a
        href={project.link}
        className="inline-flex items-center px-2 py-2 text-sm text-center focus:ring-4 focus:outline-none bg-neutral-950 bg-opacity-50 rounded-md shadow-lg text-[#d1c8b2]"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project
        <svg
          className="rtl:rotate-180 w-2.5 h-2.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      <div className="mt-10">
        {project?.skills?.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="inline-block px-3 text-sm py-1.5 bg-stone-950 bg-opacity-55 shadow-sm shadow-[#d1c8b2] text-[#d1c8b2] rounded-md font-sans font-light mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
