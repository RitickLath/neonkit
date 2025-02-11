import { useState } from "react";
import TailwindColorPalette from "../Components/TailwindColorPalette";
import PaletteButton from "../Components/PaletteButton";
import Heading from "../Components/Heading";
import { Headings } from "../constants/Heading";

const Palettes = () => {
  // State to toggle between Tailwind and Custom color palettes
  const [isTailwindPalette, setIsTailwindPalette] = useState(true);

  return (
    <div className="p-6 flex flex-col items-center space-y-8">
      {/* Page Heading */}
      <Heading
        title={Headings.Palettes.title}
        description={Headings.Palettes.description}
        subtitle={Headings.Palettes.subtitle}
      />

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
