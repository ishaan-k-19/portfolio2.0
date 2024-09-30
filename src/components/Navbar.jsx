import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
        transition: { duration: 0.6, delay: 1.2},
      }}
      onAnimationComplete={() => setShowContent(true)}
      layoutId="header"
      className="bg-[#d1c8b2] rounded-2xl shadow-lg p-6 flex items-center justify-between col-span-10 text-stone-700 min-h-[85px]"
    >
      {showContent && (
        <>
          <motion.h1
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-2xl font-serif italic"
          >
            <span className="text-3xl">Ishaan</span> Kashyap
          </motion.h1>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex gap-10 text-lg font-medium px-3"
          >
            <AnimatedNavLink to="/" label="Home" />
            <AnimatedNavLink to="/projects" label="Projects" />
            <AnimatedNavLink to="/contact" label="Contact" />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const AnimatedNavLink = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative transition-all ${isActive ? "active" : ""}`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <motion.div
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-stone-700"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default Navbar;
