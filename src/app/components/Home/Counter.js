"use client";
import { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";

const Counter = ({ start, end, duration, trigger, text }) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!trigger.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger.current);

    return () => observer.disconnect();
  }, [trigger]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, start, end, duration]);

  return (
    <div className="flex flex-col">
      <div className="text-xl md:text-4xl xl:text-5xl font-bold flex">
        {count}
        <FaPlus className="text-sm sm:text-base md:text-lg xl:text-xl"/>
      </div>
      <div className="text-xs sm:text-sm md:text-base xl:text-lg">{text}</div>
    </div>
  );
};

export default Counter;
