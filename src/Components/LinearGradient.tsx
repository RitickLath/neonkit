import { useEffect, useState } from "react";
import {
  fromColor,
  toColor,
  gradientDirections,
} from "../constants/GradientShades";
import { FaRegCopy, FaSyncAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

interface StateType {
  direction: number;
  from: string;
  to: string;
}

// Function to get a random color from the array
const getRandomColor = (colors: string[][]) => {
  const category = Math.floor(Math.random() * colors.length);
  const shade = Math.floor(Math.random() * colors[category].length);
  return colors[category][shade];
};

// Initialize gradients array
const generateGradients = (count: number) => {
  return Array.from({ length: count }, () => ({
    direction: 0,
    from: getRandomColor(fromColor),
    to: getRandomColor(toColor),
  }));
};

const LinearGradient = () => {
  const [gradients, setGradients] = useState<StateType[]>(
    generateGradients(12)
  );
  const [copied, setCopied] = useState({ statue: true, index: -1 });

  const loadMore = () => {
    setGradients((prev) => [...prev, ...generateGradients(10)]);
  };

  useEffect(() => {}, []);

  const rotateGradient = (index: number) => {
    setGradients((prev) => {
      const updatedGradients = [...prev];
      updatedGradients[index].direction =
        (updatedGradients[index].direction + 1) % gradientDirections.length;
      return updatedGradients;
    });
  };

  const copyToClipboard = (gradient: StateType, i: number) => {
    const className = `${gradientDirections[gradient.direction]} ${
      gradient.from
    } ${gradient.to}`;
    setCopied({ statue: true, index: i });
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="p-3 border border-[#27272A] hover:bg-[#27272A] rounded-lg shadow-md transition"
                >
                  <FaSyncAlt />
                </button>
                <button
                  onClick={() => copyToClipboard(g, i)}
                  className="p-3 border border-[#27272A] hover:bg-[#27272A] rounded-lg shadow-md transition"
                >
                  {copied.statue && copied.index != i ? (
                    <FaRegCopy />
                  ) : (
                    <FaCheck />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      <button
        onClick={loadMore}
        className="mt-0 p-3 font-semibold cursor-pointer border border-[#27272A] hover:bg-[#27272A] rounded-lg shadow-md transition"
      >
        Load More
      </button>
    </div>
  );
};

export default LinearGradient;
