import { motion } from "framer-motion";
import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,

  description,
}) => {
  return (
    <div className="text-center text-white max-w-2xl pt-12 lg:pt-16">
      <motion.h1
        initial={{ letterSpacing: "3px" }}
        animate={{ letterSpacing: "0px" }}
        transition={{ duration: 3 }}
        className="text-5xl lg:text-6xl font-bold mb-3"
      >
        {title} <span className="text-[#8B5DF5]">{subtitle}</span>
      </motion.h1>
      <p className="text-lg text-gray-300 max-w-[600px]">{description}</p>
    </div>
  );
};

export default Heading;
