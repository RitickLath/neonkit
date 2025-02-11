import { prerenderColor } from "../constants/colorShades";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";

const Palettes = () => {
  const [copiedColor, setCopiedColor] = useState("");

  const handleCopy = (shade: string) => {
    navigator.clipboard.writeText(shade);
    setCopiedColor(shade);
    setTimeout(() => setCopiedColor(""), 1500);
  };

  return (
    <div className="p-6 flex flex-col items-center space-y-8">
      {/* Page Heading */}
      <div className="text-left text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-3">Tailwind CSS Color Palette</h1>
        <p className="text-lg text-gray-300">
          Explore the full range of Tailwind CSS colors. Click on a color to
          copy its class name instantly!
        </p>
      </div>

      {prerenderColor.map((shades, key) => (
        <div key={key} className="w-full max-w-4xl">
          {/* Display Palette Name */}
          <h2 className="text-2xl font-semibold text-white mb-5 capitalize">
            {shades[0].replace("bg-", "").replace("-50", "")}
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
  );
};

export default Palettes;
