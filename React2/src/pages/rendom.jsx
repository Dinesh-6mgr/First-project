import React, { useState } from 'react';

function Random() {
    const colour = ["bg-red-500", "bg-blue-500", "bg-pink-500", "bg-yellow-500", "bg-green-500", "bg-purple-500", "bg-black"];
    const [color, setcolor] = useState("bg-blue-500");

    return (
        <div className={`h-[50vh] ${color} flex justify-center items-center gap-10 text-3xl`}>
            <button
                className="bg-blue-200 rounded-sm px-2 py-1 border-b border-r  "
                onClick={() => setcolor(colour[Math.floor(Math.random() * colour.length)])}
            >
                Change color
            </button>
            <button
                className="bg-blue-200 rounded-sm px-2 py-1 border-b border-r  "
                onClick={() => setcolor('bg-white')}
            >
                Set Defult
            </button>
        </div>
    );
}

export default Random;   