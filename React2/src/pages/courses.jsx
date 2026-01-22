import React, { useState, useEffect } from 'react';
import CourseTemplate from '../component/courseTemplate';
function Courses() {

    const [n, setN] = useState(0)
    const courses = [
        {
            id: 1,
            courseName: "MERN Stack Development",
            slug: "mern-stack-development",
            image: "https://miro.medium.com/v2/resize:fit:1400/1*J3G3akaMpUOLegw0p0qthA.png",
            shortDescription: "Full-stack web development using MongoDB, Express, React, and Node.js.",
            fullDescription:
                "Learn to build scalable full-stack applications using MERN Stack with real-world projects, authentication, APIs, and deployment.",
            level: "Beginner to Advanced",
            duration: "4 Months",
            language: "English / Nepali",
            certificate: true,
            technologiesUsed: ["MongoDB", "Express.js", "React.js", "Node.js"],
            projects: ["Auth System", "E-commerce App", "Admin Dashboard"],
            price: { original: 20000, discount: 12000, currency: "NPR" },
            rating: 4.8,
            status: "Active"
        },

        {
            id: 2,
            courseName: "Laravel Full Stack Development",
            slug: "laravel-full-stack",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
            shortDescription: "Build powerful backend and full-stack apps using Laravel.",
            fullDescription:
                "Master Laravel framework including MVC architecture, authentication, REST APIs, and deployment with MySQL.",
            level: "Beginner to Advanced",
            duration: "3 Months",
            language: "English / Nepali",
            certificate: true,
            technologiesUsed: ["PHP", "Laravel", "MySQL", "Blade", "Bootstrap"],
            projects: ["Blog System", "School Management System", "REST API"],
            price: { original: 18000, discount: 10000, currency: "NPR" },
            rating: 4.7,
            status: "Active"
        },

        {
            id: 3,
            courseName: "React.js Frontend Development",
            slug: "react-frontend-development",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            shortDescription: "Modern frontend development using React.js.",
            fullDescription:
                "Learn React from basics to advanced including hooks, routing, state management, and API integration.",
            level: "Beginner to Intermediate",
            duration: "2 Months",
            language: "English / Nepali",
            certificate: true,
            technologiesUsed: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
            projects: ["Portfolio Website", "API-based App", "Dashboard UI"],
            price: { original: 12000, discount: 7000, currency: "NPR" },
            rating: 4.6,
            status: "Active"
        },

        {
            id: 4,
            courseName: "Node.js & Express Backend",
            slug: "nodejs-backend-development",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            shortDescription: "Backend development with Node.js and Express.",
            fullDescription:
                "Build secure and scalable backend applications using Node.js, Express, MongoDB, and REST APIs.",
            level: "Intermediate",
            duration: "2 Months",
            language: "English / Nepali",
            certificate: true,
            technologiesUsed: ["Node.js", "Express.js", "MongoDB", "JWT"],
            projects: ["REST API", "Auth Server", "File Upload System"],
            price: { original: 14000, discount: 8000, currency: "NPR" },
            rating: 4.5,
            status: "Active"
        },

        {
            id: 5,
            courseName: "Ethical Hacking & Cyber Security",
            slug: "ethical-hacking-cyber-security",
            image: "https://bif.telkomuniversity.ac.id/wp-content/uploads/2024/09/Apa-Itu-Ethical-Hacking-dan-Bagaimana-Menjadi-Seorang-Ethical-Hacker.jpeg",
            shortDescription: "Learn ethical hacking and cyber security fundamentals.",
            fullDescription:
                "Understand hacking techniques, penetration testing, networking, and security tools with legal and ethical practices.",
            level: "Beginner to Advanced",
            duration: "3 Months",
            language: "English / Nepali",
            certificate: true,
            technologiesUsed: ["Kali Linux", "Wireshark", "Metasploit", "Nmap"],
            projects: ["Network Scanning", "Vulnerability Assessment"],
            price: { original: 22000, discount: 15000, currency: "NPR" },
            rating: 4.9,
            status: "Active"
        }
    ];

    return (
        <div>

            {/* <button onClick={() => setN(0)} className="px-2 py-1  rounded-sm">
                    MERN Stack
                </button>

                <button onClick={() => setN(1)} className="px-2 py-1 rounded-sm">
                    Laravel
                </button>

                <button onClick={() => setN(2)} className="px-2 py-1  rounded-sm">
                    React
                </button>

                <button onClick={() => setN(3)} className="px-2 py-1  rounded-sm">
                    Node.js
                </button>

                <button onClick={() => setN(4)} className="px-2 py-1  rounded-sm">
                    Ethical Hacking
                </button> */}

            <div className="flex justify-center items-center gap-5 p-5 text-xl flex-wrap">
                {courses.map((course, index) => (
                    <button
                        key={course.id}
                        onClick={() => setN(index)}
                        className={`px-4 py-2 rounded-md border
        ${n === index ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-200"}   `}
                    >
                        {course.courseName}
                    </button>
                ))}


            </div>

            <CourseTemplate
                id={courses[n].id}
                courseName={courses[n].courseName}
                image={courses[n].image}
                shortDescription={courses[n].shortDescription}
                fullDescription={courses[n].fullDescription}
                level={courses[n].level}
                duration={courses[n].duration}
                language={courses[n].language}
                certificate={courses[n].certificate}
                technologiesUsed={courses[n].technologiesUsed}
                projects={courses[n].projects}
                price={courses[n].price}
                rating={courses[n].rating}
                status={courses[n].status} />
        </div>
    );
}

export default Courses;
