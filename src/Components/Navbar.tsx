const Navbar = () => {
  return (
    <nav className="overflow-x-hidden text-white items-center flex space-x-8 lg:space-x-12 text-lg px-8 lg:px-12 lg:py-4 py-3">
      <a href="/" className="font-bold text-2xl tracking-wider">
        NeonKit
      </a>
      <div className="flex space-x-6">
        <a
          href="/components"
          className="hover:text-white cursor-pointer text-[#C8C8C8] text-base"
        >
          Components
        </a>

        <a
          href="/gradients"
          className="hover:text-white cursor-pointer text-[#C8C8C8] text-base"
        >
          Gradients
        </a>
        <a
          href="/text-gradient"
          className="hover:text-white cursor-pointer text-[#C8C8C8] text-base"
        >
          Text Gradient
        </a>
        <a
          href="/Palettes"
          className="hover:text-white cursor-pointer text-[#C8C8C8] text-base"
        >
          Palettes
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
