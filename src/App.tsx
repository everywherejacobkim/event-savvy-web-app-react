import Navbar from "@/components/navbar"
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  
  return (
    <div className="app bg-indigo-50">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
