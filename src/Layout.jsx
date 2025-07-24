import React, { useState, useEffect } from "react";
import {GridBackgroundDemo} from "./Components/background/GridBackgorund"
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from "react-router-dom"
import Footer from './Components/Footer/footer'
import Loader from "./Components/Loader";
function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <GridBackgroundDemo />

      <div className="relative z-50 mt-10">
        <Navbar />
      </div>

      <main className="relative z-10 pt-[100px] px-4 mt-10">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;