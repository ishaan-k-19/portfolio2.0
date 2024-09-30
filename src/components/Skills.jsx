import React, { useState, useEffect } from 'react';
import { skillsData } from '../../data';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 8000); 

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 1.4, 
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div className="relative h-full w-full">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className={`absolute bg-[#4b4a44] inset-0 h-full transition-transform duration-700 ease-in-out ${
              index === activeIndex ? 'translate-x-0' : index > activeIndex ? 'translate-x-full' : '-translate-x-full'
            }`}
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          >
            <motion.h2
              className="text-4xl font-serif italic text-center mt-5 text-[#d1c8b2]"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay:1.6 ,duration: 0.5, ease: 'easeInOut' }}
            >
              {item.category}
            </motion.h2>

            <motion.div className="flex flex-col items-center justify-center text-[#d1c8b2] h-2/3 mx-16">
              <motion.div className="flex flex-wrap justify-center w-full gap-3 my-8">
                {item.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 text-sm bg-stone-950 bg-opacity-55 shadow-sm shadow-[#d1c8b2] rounded-lg font-sans font-light"
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    custom={skillIndex} 
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {skillsData.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-[#d1c8b2]' : 'bg-stone-800'}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10">
          <svg
            className="w-6 h-6 text-[#d1c8b2]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10">
          <svg
            className="w-6 h-6 text-[#d1c8b2]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Skills;
