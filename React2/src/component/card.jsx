import React from 'react';
import Home from '../pages/Home';

function Card() {
    const users = [
        { id: 1, name: "Dinesh Rana", status: "Active", level: "Beginner", image: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, name: "Santosh Sharma", status: "Active", level: "Intermediate", image: "https://randomuser.me/api/portraits/men/2.jpg" },
        { id: 3, name: "Ramesh Thapa", status: "Inactive", level: "Advanced", image: "https://randomuser.me/api/portraits/men/3.jpg" },
        { id: 4, name: "Sita Gurung", status: "Active", level: "Beginner", image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { id: 5, name: "Kiran Shrestha", status: "Active", level: "Intermediate", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { id: 6, name: "Anita Tamang", status: "Inactive", level: "Advanced", image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { id: 7, name: "Raj Pandey", status: "Active", level: "Beginner", image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { id: 8, name: "Sanjana Magar", status: "Active", level: "Intermediate", image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { id: 9, name: "Bibek KC", status: "Inactive", level: "Advanced", image: "https://randomuser.me/api/portraits/men/9.jpg" },
        { id: 10, name: "Pratiksha Rai", status: "Active", level: "Beginner", image: "https://randomuser.me/api/portraits/women/10.jpg" }
    ];
    

    return (
        <Home users={users} />
    );  
}

export default Card;
