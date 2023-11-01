import React from 'react'
import MyBlog from '../../Assets/MyBlog.png';
import HotelBookingSystemAndroid from '../../Assets/HotelBookingSystemAndroid.jpg';
import TanksBattle from '../../Assets/TanksBattle.png';
import ChatingSystem from '../../Assets/ChatingSystem.png';
import SystemDatabaseDesign from '../../Assets/School_Management_System_Database_Design.png';

const Menu = [
    {
        id:1,
        title: "MyBlog Full Stack Project",
        image: MyBlog,
        category: "Personal Project",
        desc: (
            <div>
                <ul>
                    <li>Based on React.js and Spring Boot.</li>
                    <li>Utilize Spring Security and JWT implement User Authentication.</li>
                    <li>Interacting with a MySQL database using MyBatis ORM.</li>
                    <li>Interacting with a Back-end using Ajax/Axios.</li>
                </ul>
            </div>
        ),
        githubLink: "https://github.com/jielim36/My-Blog-Backend",
    },
    {
        id:2,
        title: "Hotel Booking System - Android",
        image: HotelBookingSystemAndroid,
        category: "Assignment",
        desc:(
            <div>
                <ul>
                    <li>Using Android Studio Build a application</li>
                    <li>Learn a lot of teamwork in this assignment</li>
                    <li>More than 40 pages</li>
                    <li>Using SQLite Database and more than 30 tables.</li>
                </ul>
            </div>
        ),
        githubLink: "https://github.com/jielim36/Hotel-Booking-System-Android",
    },
    {
        id:3,
        title: "Tanks Battle",
        image: TanksBattle,
        category: "Personal Project",
        desc: (
            <div>
                <ul>
                    <li>Learning Thread in Java to implement different thread of player and botLearn about threads and implement separate threads for players and robots, allowing multiple robots to move independently.</li>
                    <li>Learn about I/O streams to implement progress saving when exiting the game.</li>
                </ul>
            </div>
        ),
        githubLink: "https://github.com/jielim36/Java_note/tree/master/Project_Folder/Tank_game",
    },
    {
        id:4,
        title: "Chat System",
        image: ChatingSystem,
        category: "Personal Project",
        desc: (
            <div>
                <ul>
                    <li>Having a server-side and a client-side, using Sockets for network connection and data exchange.</li>
                    <li>When multiple users request the server, the client establishes separate threads for each user to ensure connections.</li>
                    <li>Transmit files using streams approach</li>
                </ul>
            </div>
        ),
        githubLink: "https://github.com/jielim36/Java_note/tree/master/Project_Folder/SocialSoftware",
    },
    {
        id:5,
        title: "System Database Design",
        image: SystemDatabaseDesign,
        category: "Assignment",
        desc: (
            <div>
                <ul>
                    <li>More than 30 tables.</li>
                    <li>Drawing ER-Diagrams, Data Flow, and Chen-notation ER-Diagrams.</li>
                    <li>There are SQL statements such as DDL, DML, and JOIN for multi-table queries.</li>
                </ul>
            </div>
        ),
        githubLink: "https://github.com/jielim36/School-Management-System_Database-Assignment",
    },
];

export default Menu