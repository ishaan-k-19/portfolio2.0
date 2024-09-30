import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data';

const ProjectList = () => {
  return (
    <div>
      {projects.slice().reverse().map((project, index) => (
        <motion.a
          key={project.id}
          className="project-item flex gap-2 items-center bg-opacity-45 text-stone-700 py-3 mx-16"
          href={project.link}
          target="_blank"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 1.4 + index * 0.15, 
          }}
        >
          <img
          initial={{ width: '0rem', height: '0rem' }} 
          animate={{ width: '4rem', height: '4rem'}} 
            src={project.icon}
            alt={`${project.title} icon`}
            className="project-icon w-16 h-16 object-contain"
          />
          <motion.span
            className="text-xl font-semibold w-full pb-2 relative"
            initial={{ width: '0%' }} 
            animate={{ width: '100%' }} 
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 1.4 + index * 0.15, 
            }}
          >
            <span>{project.title}</span>
            <motion.div
              className="absolute bottom-0 left-0 h-[2.5px] bg-[#867c66]"
              initial={{ width: '0%' }} 
              animate={{ width: '100%' }} 
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: 1.4 + index * 0.15, 
              }}
            />
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectList;
