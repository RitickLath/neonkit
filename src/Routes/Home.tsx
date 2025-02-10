import { useEffect, useState } from "react";
import Cards from "../Components/Cards";

const thirdWords = [
  "Launch",
  "Innovate",
  "Create",
  "Execute",
  "Refine",
  "Develop",
  "Build",
  "Transform",
  "Optimize",
  "Test",
];

const Home = () => {
  const [word, setWord] = useState({ track: 0, letter: "Launch" });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWord((prevWord) => {
        const nextTrack = (prevWord.track + 1) % thirdWords.length;
        return { track: nextTrack, letter: thirdWords[nextTrack] };
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pt-24 lg:pt-0 w-full min-h-screen flex flex-col md:flex-row justify-evenly items-center px-6">
      {/* Left Side (Text) */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl">
          Design. Prototype.
        </h1>
        <h1 className="font-bold text-[#8B5DF5] text-4xl sm:text-5xl md:text-6xl pt-2">
          {word.letter}.
        </h1>

        <p className="pt-3 max-w-[400px] sm:max-w-[500px] lg:max-w-[500px] text-lg text-gray-400">
          NeonKit provides a complete set of UI components, gradients,
          templates, and color palettes to streamline your web development
          process. Design and prototype faster with ready-to-use resources that
          bring your ideas to life effortlessly.
        </p>
        <button className="mt-4 px-4 py-1 rounded-full text-white border-white border-2">
          Random
        </button>
      </div>

      {/* Right Side (Cards) - Moves below on small screens */}
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
