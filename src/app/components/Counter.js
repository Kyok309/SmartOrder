"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

export const Counter = ({ start, end, duration }) => {
    const [count, setCount] = useState(start);
  
    useEffect(() => {
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
    }, [start, end, duration]);
  
    return (
      <div className="text-3xl lg:text-6xl font-bold flex">
        {count}
        <Plus/>
      </div>
    );
  };