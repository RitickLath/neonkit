import React from "react";
import { motion } from "framer-motion";

interface IColorBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  color?: "white" | "blue" | "black" | "purple";
}

const ColorBtn = ({
  content = "Button",
  color = "blue",
  className = "",
  ...props
}: IColorBtn) => {
  const colorClasses: Record<string, string> = {
    white: "bg-white text-black hover:bg-gray-100",
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    black: "bg-black text-white hover:bg-black/60",
    purple: "bg-[#3C35A0] text-white hover:bg-[#371D59]",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateX: 1,
        rotateY: -1,
        boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
      }}
      whileTap={{
        scale: 0.97,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={{ willChange: "transform", perspective: 1000 }}
      className={`inline-block ${className}`}
    >
      <button
        className={`cursor-pointer px-8 py-2 font-medium rounded-md transition-colors duration-200 ${colorClasses[color]} w-full`}
        {...props}
      >
        {content}
      </button>
    </motion.div>
  );
};

export default ColorBtn;
