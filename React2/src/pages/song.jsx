import React, { useState } from 'react';

function Song() {
    const [songs, setSongs] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function add() {
        if (inputValue.trim() === "") {
            alert("Enter song name");
        } else {
            setSongs([...songs, inputValue]);
            setInputValue(""); 
        }
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter song Name'
                className='p-2 m-2 border'
            />
            <button onClick={add} className='p-2 bg-blue-500 text-white'>
                Enter
            </button>

            <ul className='mt-4'>
                {songs.map((song, index) => (
                    <li key={index}>{song}</li>
                ))}
            </ul>
        </div>
    );
}

export default Song;   