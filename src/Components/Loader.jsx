import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <h1 className="text-white text-xl md:text-2xl font-semibold animate-pulse">
        Loading Shubh's Portfolio...
      </h1>
    </div>
  );
}
