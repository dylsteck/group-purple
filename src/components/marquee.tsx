import React from "react";

interface MarqueeProps {
  name: string;
}

export default function Marquee({ name }: MarqueeProps) {
  return (
    <div className="absolute bottom-0 left-0 p-10">
      <p className="text-[12vw] lg:text-[8vw] font-medium text-white opacity-80">{name}</p>
    </div>
  );
}

// build juicebox api integration !!