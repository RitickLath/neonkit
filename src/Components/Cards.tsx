import { motion } from "framer-motion";

const Cards = () => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="w-[300px] h-[600px] relative flex justify-center items-center"
    >
      {/* Card 1 - Design */}
      <motion.div
        // whileHover={{ y: -10 }}
        animate={{ rotateZ: -30, rotateX: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute top-36 p-6 text-center w-[300px] h-[300px] bg-gray-600 rounded-xl shadow-2xl text-white"
      >
        <h1 className="text-2xl font-bold">Design</h1>
        <p className="text-lg mt-2">
          NeonKit provides a complete set of UI components, enabling you to
          design stunning interfaces effortlessly.
        </p>
      </motion.div>

      {/* Card 2 - Prototype */}
      <motion.div
        // whileHover={{ y: -10 }}
        animate={{ rotateZ: -30, rotateX: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute top-20 p-6 text-center w-[300px] h-[300px] bg-green-600 rounded-xl shadow-2xl text-white"
      >
        <h1 className="text-2xl font-bold">Prototype</h1>
        <p className="text-lg mt-2">
          Speed up your workflow with ready-to-use templates and gradients,
          helping you prototype faster than ever.
        </p>
      </motion.div>

      {/* Card 3 - Transform */}
      <motion.div
        // whileHover={{ y: -10 }}
        animate={{ rotateZ: -30, rotateX: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute top-4 p-6 text-center w-[300px] h-[300px] bg-red-600 rounded-xl shadow-2xl text-white"
      >
        <h1 className="text-2xl font-bold">Transform</h1>
        <p className="text-lg mt-2">
          Elevate your web development process with NeonKit’s dynamic color
          palettes and modern UI resources.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
