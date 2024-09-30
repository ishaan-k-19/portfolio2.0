import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectList from "../components/ProjectList";
import Skills from "../components/Skills";
import Pdf from "../docs/resume.pdf"


const Home = () => {
  const [isImageDivComplete, setIsImageDivComplete] = useState(false);
  const [isTextDivComplete, setIsTextDivComplete] = useState(false); 

  const handleImageDivComplete = () => {
    setIsImageDivComplete(true); 
  };

  const handleTextDivComplete = () => {
    setIsTextDivComplete(true); 
  };
  const handleClick = () => {
    window.open(Pdf);
  }

  return (
    <div className="flex flex-col items-center mt-4 bg-neutral-900 text-stone-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-4 w-full h-[calc(100svh-8.8rem)] grid-rows-8">

      <AnimatePresence>
  {!isImageDivComplete && (
    <motion.div
      initial={{ scale: 1, y: "20%", x: "-5%" }}
      animate={{ y: 0, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.8 }}
      onAnimationComplete={handleImageDivComplete} 
      className="bg-[#4b4a44] rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 fixed top-[13%] left-[40.5%] w-[19%] h-[51%] z-10"
    >
      <img 
        className="h-[100%] w-[100%] rounded-xl object-cover"
        src="/profilePic/image2.jpeg"
        alt=""
      />
    </motion.div>
  )}
</AnimatePresence>

        <>
          <motion.div
            initial={{
              y: 40,
              x: 450,
              scale: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              transition: { duration: 0.4, delay: 1.2 },
            }}
            layoutId="teamUp"
            className="bg-[#d1c8b2] rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 col-span-4 row-span-5 justify-start items-end flex font-serif"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-5xl pb-5 pr-5"
            >
              Let's team up and create something awesome!
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 1.55 },
            }}
            layoutId="imageDiv"
            className="bg-[#4b4a44] rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 col-span-2 row-span-5"
          >
            <img 
            className=" h-[100%] w-[100%] rounded-xl object-cover"
              src="/profilePic/image2.jpeg"
              alt=""
            />
          </motion.div>

          <motion.div
            initial={{
              y: 100,
              x: -450,
              scale: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              transition: { duration: 0.4, delay: 1.2 },
            }}
            layoutId="projects"
            className="bg-[#d1c8b2] rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 col-span-4 row-span-7 scrollbar-hide scrollbar-visible"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.85 }}
              className="my-5 text-4xl mx-5 font-serif italic"
            >
              Projects
            </motion.h1>
            <div className="h-[88%] scroll-smooth overflow-auto rounded-2xl">
              <ProjectList />
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: -100,
              x: 250,
              scale: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              transition: { duration: 0.4, delay: 1.2 },
            }}
            onAnimationComplete={handleTextDivComplete} 
            layoutId="about"
            className="bg-[#d1c8b2] rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 col-span-3 row-span-4 flex items-end"
          >
            {isTextDivComplete && ( 
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base font-serif pr-16"
              >
                <motion.h1
                  initial={{ opacity: 0, x:-30, y: 0 }}
                  animate={{ opacity: 1, x:0 , y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-xl pb-2 leading-4 italic"
                >
                  FullStack
                  <br />
                  <span className="text-2xl">Developer</span>
                </motion.h1>
                <motion.p
                className="text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  I'm Ishaan, studying Computer Science at the University of
                  Winnipeg, and I'll be graduating in 2025. I love building things
                  on the internet, from how they look to how they work. I enjoy
                  learning new stuff about technology and am always looking for
                  chances to work with others on cool projects.
                </motion.p>
              </motion.h2>
            )}
          </motion.div>

          <motion.div
            initial={{
              y: -200,
              x: 0,
              scale: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              transition: { duration: 0.4, delay: 1.2 },
            }}
            layoutId="skills"
            className="bg-neutral-900 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 col-span-3 row-span-4"
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{
              y: -350,
              x: -250,
              scale: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              scale: 1,
              transition: { duration: 0.4, delay: 1.2 },
            }}
            layoutId="social"
            className="bg-[#d1c8b2] rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 col-span-4 row-span-2 gap-20 flex px-20 items-center text-lg font-semibold"
          >
            <motion.a
              href="https://github.com/ishaan-k-19" target="blank"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Github
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ishaan-kashyap-083a79237/" target="blank"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
            onClick={handleClick}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </>
      </div>
    </div>
  );
};

export default Home;
