import { useState } from "react";
import PaletteButton from "../Components/PaletteButton";
import Heading from "../Components/Heading";
import { Headings } from "../constants/Heading";
import RadialGradient from "../Components/RadialGradient";
import LinearGradientModular from "../Components/LinearGradientModular";

const TextGradient = () => {
  
  const [isLinearGradient, setIsLinearGradient] = useState(true);

  return (
    <div className="p-6 flex flex-col items-center space-y-8">
      {/* Page Heading */}
      <Heading
        title={Headings.textGradient.title}
        description={Headings.textGradient.description}
        subtitle={Headings.textGradient.subtitle}
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
        <LinearGradientModular text={true} />
      ) : (
        <RadialGradient />
      )}
    </div>
  );
};

export default TextGradient;
