import { useState } from "react";
import TailwindColorPalette from "../Components/TailwindColorPalette";
import PaletteButton from "../Components/PaletteButton";

const Palettes = () => {
  // State to toggle between Tailwind and Custom color palettes
  const [isTailwindPalette, setIsTailwindPalette] = useState(true);

  return (
    <div className="p-6 flex flex-col items-center space-y-8">
      {/* Page Heading */}
      <div className="text-center text-white max-w-2xl pt-12 lg:pt-16">
        <h1 className="text-5xl lg:text-6xl font-bold mb-3">
          Endless Color <span className="text-[#8B5DF5]">Palette</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-[600px]">
          Explore limitless color combinations with a mix of Tailwind CSS
          classes and custom shades. Perfect for web design, branding, and
          creative projects—click any color to instantly copy its class name!
        </p>
      </div>

      {/* Palette Selector Buttons */}
      <div className=" justify-center items-center flex-col space-y-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4 flex ">
        {/* Tailwind Color Palette Button */}
        <PaletteButton
          isTailwindPalette={isTailwindPalette}
          setIsTailwindPalette={setIsTailwindPalette}
          text="Tailwind Color Palette"
          value={true}
        />

        {/* Custom Color Palette Button */}
        <PaletteButton
          isTailwindPalette={!isTailwindPalette}
          setIsTailwindPalette={setIsTailwindPalette}
          text="Custom Color Palette"
          value={false}
        />
      </div>

      {/* Display based on state */}
      <div className="mt-8 w-full max-w-4xl">
        {isTailwindPalette ? (
          <TailwindColorPalette />
        ) : (
          <div className="text-center text-white">
            Custom Color Palette Coming Soon...
          </div>
        )}
      </div>
    </div>
  );
};

export default Palettes;
