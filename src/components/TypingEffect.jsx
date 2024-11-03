import React, { useEffect, useState } from "react";

function TypingEffect({ text, speed, pauseDuration }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (!isPaused) {
        if (index < text.length - 1) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          
          setIsPaused(true);
          setTimeout(() => {
            setDisplayedText(""); 
            index = 0; 
            setIsPaused(false); 
          }, pauseDuration);
        }
      }
    }, speed);

    return () => clearInterval(typingInterval); 
  }, [text, speed, pauseDuration, isPaused]);

  return <div className="typing-effect">{displayedText}</div>;
}

export default TypingEffect;
