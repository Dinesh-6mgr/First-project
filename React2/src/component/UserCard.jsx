import React from "react";

function UserCard({ name, status, level, image }) {
    return (
        <div className="bg-blue-200 p-4 w-[220px] flex flex-col items-center gap-2 rounded shadow-md">
            <img src={image} alt={name} className="w-20 h-20 rounded-sm border border-white" />
            <h3 className="font-semibold text-lg">{name}</h3>
            <span className="text-sm px-2 py-1  text-green-700 rounded-sm">
                {status}
            </span>
            <p className="text-gray-600 ">{level}</p>
        </div>
    );
}

export default UserCard;
