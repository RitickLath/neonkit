const Background = ({ children }) => {
  return (
    <>
      <div className="absolute pl-4 flex flex-wrap space-x-7 -z-10 bg-black">
        {Array(10000)
          .fill(null)
          .map(() => (
            <p className="opacity-60 text-green-800">.</p>
          ))}
      </div>
      <div>{children}</div>
    </>
  );
};

export default Background;

// gradient-to-b from-gray-900 to-gray-600
