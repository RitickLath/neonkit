const Background = () => {
  return (
    <>
      <div className="-z-10 absolute pl-4 flex flex-wrap space-x-7 bg-black">
        {Array(1200)
          .fill(null)
          .map((_val, key) => (
            <p key={key} className="opacity-60 text-green-800">
              .
            </p>
          ))}
      </div>
    </>
  );
};

export default Background;
