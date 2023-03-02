import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Home from "@/pages/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        setSelectedPage("home");
      } else {
        setIsTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-indigo-50">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTop={isTop} />
        <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
