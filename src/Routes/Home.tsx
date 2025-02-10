import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { thirdWords } from "../constants/ThirdWord";
import { motion } from "framer-motion";

const Home = () => {
  const [word, setWord] = useState({ track: 0, letter: "Launch" });
  const [index, setIndex] = useState<number>(0);

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
    <div className="pt-24 lg:pt-0 w-full flex flex-col lg:flex-row items-center justify-evenly px-6">
      {/* Left Side (Text) */}
      <div className="text-center md:text-left">
        <h1 className="font-bold text-white text-4xl sm:text-6xl lg:text-6xl">
          Design. Prototype.
        </h1>
        <h1 className="font-bold text-[#8B5DF5] text-4xl sm:text-6xl lg:text-6xl pt-2">
          {word.letter}.
        </h1>

        <p className="pt-3 max-w-[400px] sm:max-w-[500px] text-lg text-gray-400">
          NeonKit provides a complete set of UI components, gradients,
          templates, and color palettes to streamline your web development
          process. Design and prototype faster with ready-to-use resources that
          bring your ideas to life effortlessly.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          onClick={() => {
            setIndex(Math.floor(Math.random() * 21));
          }}
          className="mt-4 px-8 py-2 cursor-pointer rounded-full text-white border-white border-2"
        >
          Random
        </motion.button>
      </div>

      {/* Right Side (Cards) */}
      <div className="lg:mt-12">
        <Cards index={index} />
      </div>
    </div>
  );
};

export default Home;
