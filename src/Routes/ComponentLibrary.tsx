import Heading from "../components/Heading";
import ColorBtn from "../generic components/Buttons/ColorBtn";

const ComponentLibrary = () => {
  return (
    <div className="p-6 flex flex-col items-center space-y-12">
      {/* Page Heading */}
      <Heading
        title="Ultimate UI Library"
        description=""
        subtitle="Coming Soon"
      />

      {/* Buttons Section */}
      <div className="w-full max-w-4xl bg-[#27272A] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl text-white font-semibold mb-6 text-center">Buttons</h2>

        <h2 className="text-xl text-white font-semibold mb-6 text-center">
          Simple Yet Classy
        </h2>
        <div className=" flex flex-wrap gap-6 justify-center">
          <ColorBtn color="white" content="White" />
          <ColorBtn color="blue" content="Blie" />
          <ColorBtn color="black" content="Dark" />
          <ColorBtn color="purple" content="Premium" />
        </div>
      </div>

      {/* Example Placeholder */}
      <div className="w-full max-w-4xl bg-[#27272A] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl text-white font-semibold mb-6">Inputs</h2>
        <div className="text-gray-400">Coming Soon...</div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
