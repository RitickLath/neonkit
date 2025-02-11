import { useState } from "react";
import { fromColor, toColor } from "../constants/GradientShades";

const LinearGradient = () => {
  const [total, setTotal] = useState(Array(10).fill(null));
  //console.log(`${fromColor[0][0]} ${toColor[0][0]} `);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl space-y-8 p-6 text-white">
      {/* Heading Section */}
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl text-[#9F9E9C] lg:text-5xl font-bold mb-4">
          Tailwind <span className="text-[#0ef864a9]">Linear Gradient</span>
        </h1>
        <p className="text-lg text-gray-300">
          Create smooth, flowing transitions between colors using Tailwind's
          linear gradients. Perfect for backgrounds, buttons, and more!
        </p>
      </div>

      {/* Show Linear Gradient */}
      <div className="space-y-4">
        {total.map((_, index) => {
          return (
            <div
              key={index}
              className={`bg-gradient-to-r ${fromColor[0][0]} ${toColor[0][0]} w-12 h-12 lg:h-28 rounded-xl flex flex-col items-center justify-center cursor-pointer relative shadow-lg`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default LinearGradient;
