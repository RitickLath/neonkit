import { useEffect, useState } from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import Cards from "../Components/Cards";
import { heroContent, thirdWords } from "../constants/HeroContent";
import { motion } from "framer-motion";

const iconMap = {
  SiNextdotjs: SiNextdotjs,
  SiReact: SiReact,
  SiTailwindcss: SiTailwindcss,
  SiFramer: SiFramer,
};

const Home = () => {
  const [word, setWord] = useState({ track: 0, letter: thirdWords[0] });
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
    <div className="pt-12 lg:pt-0 w-full flex flex-col lg:flex-row items-center justify-evenly px-6">
      {/* Left Side (Text) */}
      <div className="text-center md:text-left">
        <motion.h1
          initial={{ letterSpacing: "3px" }}
          animate={{ letterSpacing: "0px" }}
          transition={{ duration: 3 }}
          className=" font-bold text-white text-4xl sm:text-6xl lg:text-6xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.h1
          initial={{ letterSpacing: "0px" }}
          animate={{ letterSpacing: "3px" }}
          transition={{ duration: 3 }}
          className="font-bold text-4xl sm:text-6xl lg:text-6xl pt-2"
          style={{ color: heroContent.highlightColor }}
        >
          {word.letter}.
        </motion.h1>

        <p className="pt-3 max-w-[500px] sm:text-lg text-gray-400">
          {heroContent.description}
        </p>

        {/* Logos */}
        <div className="flex flex-wrap space-y-1 justify-center md:justify-normal space-x-4 mt-6 text-white text-sm sm:text-lg">
          {heroContent.techStack.map((tech, index) => {
            const IconComponent = iconMap[tech.icon as keyof typeof iconMap];

            return (
              <div key={index} className="flex items-center space-x-1.5">
                {IconComponent && (
                  <IconComponent className={tech.color + " transition-all"} />
                )}
                <p className="text-gray-400">{tech.name}</p>
              </div>
            );
          })}
        </div>

        {/* Random Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setIndex(Math.floor(Math.random() * 21))}
          className="relative mt-4 px-8 py-2 cursor-pointer rounded-full text-white border-white border-2"
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
