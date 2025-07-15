import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/profile.jpg"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768); // Tailwind md = 768px
  const controls = useAnimation();

  // Track window resize to update isMdUp
  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate only on md and up
  useEffect(() => {
    if (isMdUp) {
      controls.start({
        width: isScrolled ? "60%" : "90%",
        borderRadius: "1rem",
        margin: "10px",
        transition: { duration: 0.3, ease: "easeInOut" },
      });
    }
  }, [isScrolled, isMdUp, controls]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      {isMdUp ? (
        <motion.nav
          animate={controls}
          className="fixed md:top-8  left-1/2 transform -translate-x-1/2 z-50
            px-6 py-4 bg-white/60 dark:bg-gray-700/70
            shadow-md backdrop-blur-md 
            transition-all duration-500 ease-in-out hidden md:block"
        >
          <div className="flex justify-between items-center gap-8">
             <div className="flex gap-3">
              <img src={profile} alt="profile pic" className="rounded-full  h-10 w-10 " />
              <div className="text-white mt-2 font-mono">
                Shubh Ujala
              </div>
             </div>
            <ul className="flex gap-8 text-lg font-semibold text-gray-800 dark:text-white">
              <li>
                <NavLink
                    to="/"
                    className={({isActive}) => 
                      `cursor-pointer ${isActive ? "text-red-400 hover:text-gray-400":"text-gray-200 hover:text-red-400"}`
                    }
                >
                 Home
                </NavLink>
              </li>
            
              <li className="cursor-pointer hover:text-red-400">
                 <NavLink
                    to="/projects"
                    className={({isActive}) => 
                      `cursor-pointer ${isActive ? "text-red-400 hover:text-gray-400":"text-gray-200 hover:text-red-400"}`
                    }
                >
                 Projects
                </NavLink>
              </li>
              <li >
                <NavLink
                    to="/contact"
                    className={({isActive}) => 
                      `cursor-pointer ${isActive ? "text-red-400 hover:text-gray-400":"text-gray-200 hover:text-red-400"}`
                    }
                >
                 Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </motion.nav>
      ) : (
        <nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/60 dark:bg-gray-700/60
            shadow-md backdrop-blur-md m-5 rounded-lg md:hidden"
        >
          <div className="flex justify-between items-center">
              <div className="flex ">
                <img src={profile} alt="profile pic" className="rounded-full  h-10 w-10 " />
                <div className="text-white mt-2 ml-2 font-mono">Shubh Ujala</div>
              </div>
           
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </nav>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && !isMdUp && (
        <div className="fixed top-[64px] left-8 right-20 w-[90%]  z-40 mt-5 rounded bg-white/80 dark:bg-gray-700/60 backdrop-blur-md px-6 py-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 text-lg font-semibold text-gray-800 dark:text-white">
            <li >
              <NavLink
                    to="/"
                    className={({isActive}) => 
                      `cursor-pointer ${isActive ? "text-red-400 hover:text-gray-400":"text-gray-200 hover:text-red-400"}`
                    }
                    onClick={toggleMenu}
                >
                 Home
                </NavLink>
            </li>
            
            <li >
              <NavLink
                    to="/projects"
                    className={({isActive}) => 
                      `cursor-pointer ${isActive ? "text-red-400 hover:text-gray-400":"text-gray-200 hover:text-red-400"}`
                    }
                    onClick={toggleMenu}
                >
                 Projects
                </NavLink>
            </li>
            <li>
              <NavLink
                    to="/contact"
                    className={({isActive}) => 
                      `cursor-pointer ${isActive ? "text-red-400 hover:text-gray-400":"text-gray-200 hover:text-red-400"}`
                    }
                    onClick={toggleMenu}
                >
                 Contact
                </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
