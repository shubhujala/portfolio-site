import { cn } from "../../lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
     <div 
       className="fixed inset-0 w-full h-full bg-black"
       style={{
         backgroundImage: 'radial-gradient(#808080 1px, transparent 1px)',
         backgroundSize: '20px 20px',
         minHeight: '100vh',
       }}
     >
       {/* Radial gradient overlay for faded effect */}
       <div 
         className="absolute inset-0 w-full h-full"
         style={{
           background: 'radial-gradient(ellipse at center, transparent 20%, black)',
           minHeight: '100vh',
         }}
       ></div>
     </div>
  );
}
