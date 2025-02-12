import { useEffect, useState } from "react";

const TextGradient = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!showComponent) {
    return null;
  }

  return <div className="text-white">TextGradient</div>;
};

export default TextGradient;
