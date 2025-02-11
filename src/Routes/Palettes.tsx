import { prerenderColor } from "../constants/colorShades";

const Palettes = () => {
  return (
    <div className="p-4 lg:flex flex-col items-center">
      {prerenderColor.map((shades, key) => (
        <div key={key} className="mb-6">
          {/* Display Palette Name */}
          <h1 className="text-xl font-bold text-white mb-2 capitalize">
            {shades[0].replace("bg-", "").replace("-50", "")}
          </h1>

          {/* Display Color Palette */}
          <div className="grid grid-cols-1 md:flex md:space-x-2 md:space-y-0 gap-2">
            {shades.map((shade, index) => (
              <div
                key={index}
                className={`w-full h-16 md:w-20 md:h-32 rounded-xl flex items-end justify-start lg:items-center lg:justify-center lg:px-0 lg:pb-0 pb-3 px-3 ${shade}`}
              >
                <span
                  className={`text-sm font-medium ${
                    index < 3 ? "text-black" : "text-white"
                  }`}
                >
                  {shade
                    .substring(shade.length - 3, shade.length)
                    .replace("-", "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Palettes;
