import Background from "./components/Background";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import React from "react";
function App() {
  return (
    <>
      <div className="bg w-full h-screen relative bg-zinc-800">
        <Navbar />
        <Background />
        <Layout />
        <div className="flex absolute bottom-0">
        </div>
      </div>
    </>
  );
}

export default App;
