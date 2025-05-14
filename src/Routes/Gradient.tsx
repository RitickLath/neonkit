import { useState } from "react";
import Heading from "../components/Heading";
import LinearGradientModular from "../components/LinearGradientModular";
import PaletteButton from "../components/PaletteButton";
import RadialGradient from "../components/RadialGradient";
import { Headings } from "../constants/Heading";

const Gradient = () => {
  // State to toggle between Linear and Radial gradient
  const [isLinearGradient, setIsLinearGradient] = useState(true);

  return (
    <div className="p-6 flex flex-col items-center space-y-8">
      {/* Page Heading */}
      <Heading
        title={Headings.gradient.title}
        description={Headings.gradient.description}
        subtitle={Headings.gradient.subtitle}
      />

      {/* Gradient Type Selector Buttons */}
      <div className="justify-center items-center flex-col space-y-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4 flex">
        {/* Linear Gradient Button */}
        <PaletteButton
          isTailwindPalette={isLinearGradient}
          setIsTailwindPalette={setIsLinearGradient}
          text="Linear Gradient"
          value={true}
        />

        {/* Radial Gradient Button */}
        <PaletteButton
          isTailwindPalette={!isLinearGradient}
          setIsTailwindPalette={setIsLinearGradient}
          text="Radial Gradient"
          value={false}
        />
      </div>

      {/* Linear and Radial Gradient */}
      {isLinearGradient ? (
        <LinearGradientModular text={false} />
      ) : (
        <RadialGradient />
      )}
    </div>
  );
};

export default Gradient;
