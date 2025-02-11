import { prerenderColor } from "../constants/colorShades";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";

const TailwindColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState("");

  const handleCopy = (shade: string) => {
    navigator.clipboard.writeText(shade);
    setCopiedColor(shade);
    setTimeout(() => setCopiedColor(""), 1500);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl space-y-8 p-6">
      {/* Heading Section */}
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl text-[#9F9E9C] lg:text-5xl font-bold mb-4">
          Tailwind <span className="text-[#0ef864a9]">Color Palette</span>
        </h1>
        <p className="text-lg text-gray-300">
          Explore a collection of predefined Tailwind CSS color classes. Click
          on any color to instantly copy its class name for effortless use in
          your projects.
        </p>
      </div>

      <div className="w-full max-w-4xl max-h-[500px] overflow-y-auto no-scrollbar p-4 border border-gray-700 rounded-lg shadow-lg">
        {prerenderColor.map((shades, key) => (
          <div key={key} className="mb-8">
            {/* Display Palette Name */}
            <h2 className="text-2xl font-semibold text-white mb-5">
              Shades of{" "}
              <span className="capitalize">
                {shades[0].replace("bg-", "").replace("-50", "")}
              </span>
            </h2>

            {/* Display Color Palette */}
            <div className="grid lg:grid-cols-11 gap-3">
              {shades.map((shade, index) => (
                <div
                  key={index}
                  className={`h-12 lg:h-28 rounded-xl flex flex-col items-center justify-center cursor-pointer relative ${shade} shadow-lg`}
                  onClick={() => handleCopy(shade)}
                >
                  <span
                    className={`text-sm font-semibold ${
                      index < 3 ? "text-black" : "text-white"
                    }`}
                  >
                    {shade
                      .substring(shade.length - 3, shade.length)
                      .replace("-", "")}
                  </span>
                  {copiedColor === shade && (
                    <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded shadow-md">
                      Copied!
                    </span>
                  )}
                  <FaRegCopy
                    className={`${
                      index < 3
                        ? "text-black hover:text-white"
                        : "text-white hover:text-black"
                    } absolute bottom-2 right-2 opacity-70 hover:opacity-100 transition-opacity`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailwindColorPalette;
