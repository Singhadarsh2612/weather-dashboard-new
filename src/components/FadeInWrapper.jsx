import React, { useEffect, useState } from "react";

const FadeInWrapper = ({ children }) => {
  const [fadeClass, setFadeClass] = useState("fade-in-page");

  useEffect(() => {
    setFadeClass("fade-in-page");
    const timer = setTimeout(() => setFadeClass(""), 800);
    return () => clearTimeout(timer);
  }, [children]);

  return <div className={fadeClass}>{children}</div>;
};

export default FadeInWrapper;
