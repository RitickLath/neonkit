import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,

  description,
}) => {
  return (
    <div className="text-center text-white max-w-2xl pt-12 lg:pt-16">
      <h1 className="text-5xl lg:text-6xl font-bold mb-3">
        {title} <span className="text-[#8B5DF5]">{subtitle}</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-[600px]">{description}</p>
    </div>
  );
};

export default Heading;
