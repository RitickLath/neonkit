import { motion } from "framer-motion";

interface Propype {
  isTailwindPalette: boolean;
  setIsTailwindPalette: (val: boolean) => void;
  text: string;
  value: boolean;
}

const PaletteButton = ({
  isTailwindPalette,
  setIsTailwindPalette,
  text,
  value,
}: Propype) => {
  return (
    <motion.button
      className={`py-2 px-6 cursor-pointer rounded-lg font-semibold text-lg transition-colors ${
        isTailwindPalette
          ? "bg-[#8B5DF5] text-white"
          : "bg-gray-700 text-white hover:bg-[#8B5DF5]"
      }`}
      onClick={() => setIsTailwindPalette(value)}
      animate={{
        scale: isTailwindPalette ? 1 : 1.08,
      }}
      transition={{
        duration: 0.5,
        repeat: isTailwindPalette ? 0 : Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.button>
  );
};

export default PaletteButton;
