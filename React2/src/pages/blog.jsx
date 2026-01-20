import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

function Blog() {
  const [color, setColor] = useState("bg-blue-500");

  return (
    <div className="py-5 h-[50vh]">
      <div className={`h-[35vh] w-full ${color}`}></div>

      <div className="h-[10vh] p-5  w-full flex justify-around items-center text-xl">
        <button className="px-2 py-1 border bg-red-500 rounded-sm text-white" onClick={() => setColor("bg-red-500")}>Red</button>
        <button className="px-2 py-1 border bg-yellow-500 rounded-sm text-white" onClick={() => setColor("bg-yellow-500")}>Yellow</button>
        <button className="px-2 py-1 border bg-black text-white rounded-sm" onClick={() => setColor("bg-black")}>Black</button>
        <button className="px-2 py-1 border bg-green-500 rounded-sm text-white" onClick={() => setColor("bg-green-500")}>Green</button>
        <button className="px-2 py-1 border bg-pink-500 rounded-sm text-white" onClick={() => setColor("bg-pink-500")}>Pink</button>
        <button className="px-2 py-1 border bg-gray-500 rounded-sm text-white" onClick={() => setColor("bg-gray-500")}>Gray</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Blog;
