import React from "react";
import Card from "../component/card";

function Home({ users }) {
    const employs = users
    return (
        <div className="flex flex-wrap gap-4 justify-center p-5">
            {employs.map((employ) => (
                <UserCard key={employ.id} user={employ} />
            ))}
        </div>
    );
}

export default Home;
