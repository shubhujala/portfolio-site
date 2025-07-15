import React, { useEffect, useState } from "react";

function TypingLoop({ texts = [], speed = 150, delay = 1000 }) {
  const [textIndex, setTextIndex] = useState(0); // current string index
  const [charIndex, setCharIndex] = useState(0); // character being typed
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Wait before showing next string
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, speed, delay]);

  return (
    <div className="text-4xl font-bold text-center mt-8 md:mt-20 md:text-6xl text-[#b2bec3] ">
      {displayedText}
      <span className="animate-ping">|</span>
    </div>
  );
}

export default TypingLoop;
