import { useState } from "react";
import { IoSunnyOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-2xl bg-black text-white flex justify-between items-center px-6 lg:px-12 py-4">
      {/* Logo */}
      <a href="/" className="font-bold text-2xl tracking-wider">
        NeonKit
      </a>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        {["Components", "Gradients", "Text Gradient", "Palettes"].map(
          (item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-white cursor-pointer text-[#C8C8C8] text-base"
            >
              {item}
            </a>
          )
        )}
      </div>

      {/* Icons: Dark Mode & Twitter */}
      <div className="hidden lg:flex space-x-4 items-center">
        <motion.button whileHover={{ rotateZ: 100 }} className="text-xl">
          <IoSunnyOutline />
        </motion.button>

        <a
          href="https://x.com/RitickCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-blue-400 hover:text-blue-300"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-2xl" onClick={() => setIsOpen(true)}>
        <IoMenu />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 right-0 w-64 h-full bg-black shadow-lg flex flex-col items-center p-6 space-y-6 lg:hidden"
          >
            {/* Close Button */}
            <button
              className="self-end text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            {/* Mobile Menu Items */}
            {["Components", "Gradients", "Text Gradient", "Palettes"].map(
              (item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-lg text-[#C8C8C8] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}

            {/* Icons: Dark Mode & Twitter */}
            <div className="flex space-x-4 items-center">
              <motion.button whileHover={{ rotateZ: 100 }} className="text-2xl">
                <IoSunnyOutline />
              </motion.button>

              <a
                href="https://x.com/RitickCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400 hover:text-blue-300"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
