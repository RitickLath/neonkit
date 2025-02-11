import { useState } from "react";
import {
  fromColor,
  toColor,
  gradientDirections,
} from "../constants/GradientShades";
import { FaRegCopy, FaSyncAlt } from "react-icons/fa";

// Function to get a random color from the array
const getRandomColor = (colors: string[][]) => {
  const category = Math.floor(Math.random() * colors.length);
  const shade = Math.floor(Math.random() * colors[category].length);
  return colors[category][shade];
};

// Initialize gradients array
const generateGradients = (count: number) => {
  const gradients = [];
  for (let i = 0; i < count; i++) {
    gradients.push({
      direction: 0,
      from: getRandomColor(fromColor),
      to: getRandomColor(toColor),
    });
  }
  return gradients;
};

const LinearGradient = () => {
  const [gradients, setGradients] = useState(generateGradients(12));

  const rotateGradient = (index: number) => {
    setGradients((prev) => {
      const updatedGradients = [...prev];
      updatedGradients[index].direction =
        (updatedGradients[index].direction + 1) % gradientDirections.length;
      return updatedGradients;
    });
  };

  const copyToClipboard = (gradient) => {
    const className = `${gradientDirections[gradient.direction]} ${
      gradient.from
    } ${gradient.to}`;
    navigator.clipboard.writeText(className);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl space-y-8 p-6 text-white">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl text-[#9F9E9C] lg:text-5xl font-bold mb-4">
          Tailwind <span className="text-[#0ef864a9]">Linear Gradient</span>
        </h1>
        <p className="text-lg text-gray-300">
          Click rotate to change direction or copy the class name instantly!
        </p>
      </div>

      {/* Gradient Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gradients.map((g, i) => {
          const gradientClass = `${gradientDirections[g.direction]} ${g.from} ${
            g.to
          }`;

          return (
            <div key={i} className="flex flex-col items-center space-y-3">
              {/* Gradient Box */}
              <div
                className={`cursor-pointer ${gradientClass} w-[350px] lg:w-[280px] h-[180px] rounded-xl shadow-lg transition-transform hover:scale-105`}
              ></div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => rotateGradient(i)}
                  className="p-3 border border-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition"
                >
                  <FaSyncAlt />
                </button>
                <button
                  onClick={() => copyToClipboard(g)}
                  className="p-3 border border-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition"
                >
                  <FaRegCopy />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinearGradient;
