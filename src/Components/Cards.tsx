import { motion } from "framer-motion";
import { colorShadesArray } from "../constants/colorShades";
import { cardContents } from "../constants/cardContent";

const Cards = ({ index }: { index: number }) => {
  const shades = colorShadesArray[index];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="w-[300px] h-[600px] relative flex justify-center items-center"
    >
      {/* Card 1 - Design */}
      <motion.div
        initial={{ rotateZ: -30, rotateX: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`${shades[0]} absolute top-36 p-6 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-xl shadow-2xl text-white`}
      >
        <p className="text-lg mb-3">{cardContents[0].description}</p>
        <h1 className="text-2xl font-bold">{cardContents[0].title}</h1>
      </motion.div>

      {/* Card 2 - Prototype */}
      <motion.div
        initial={{ rotateZ: -30, rotateX: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`${shades[1]} absolute top-20 p-6 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-xl shadow-2xl text-white`}
      >
        <p className="text-lg mb-3">{cardContents[1].description}</p>
        <h1 className="text-2xl font-bold">{cardContents[1].title}</h1>
      </motion.div>

      {/* Card 3 - Transform */}
      <motion.div
        initial={{ rotateZ: -30, rotateX: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`${shades[2]} absolute top-4 p-6 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-xl shadow-2xl text-white`}
      >
        <p className="text-lg mb-3">{cardContents[2].description}</p>
        <h1 className="text-2xl font-bold">{cardContents[2].title}</h1>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
