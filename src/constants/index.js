import { edunet, internpedia, marwadi, coc, mtt } from '../assets/images';

import {
    luna,
    contact,
    css,
    snapvibe,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    vibeexchange,
    tailwindcss,
    threads,
    java,
    mysql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "java",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "mysql",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Development Intern",
        company_name: "Internpedia",
        icon: internpedia,
        iconBg: "#B8B8B8",
        date: "November 2023 - January 2024",
        points: [
            "Successfully completed a one-month internship focused on web development, where I independently designed and developed eight diverse projects utilizing HTML, CSS, and JavaScript, showcasing adaptability and proficiency in frontend technologies.",
            "Recognized as 'Intern of the Month' for outstanding dedication, initiative, and contribution to project completion, demonstrating a strong work ethic and commitment to excellence.",
        ],
    },
    {
        title: "IBM Cloud Intern",
        company_name: "Edunet Foundation",
        icon: edunet,
        iconBg: "#E0D4F5",
        date: "January 2024 - February 2024",
        points: [
            "During my internship, I gained hands-on experience with IBM Cloud, deepening my understanding of cloud computing.",
            "This practical exposure allowed me to develop and deploy applications efficiently, ensuring they were scalable and secure. By collaborating with experienced professionals, I enhanced my skills in cloud management and learned best practices for utilizing IBM Cloud's capabilities.",
        ],
    },
];

export const education = [
    {
        title: "Bachelor in Computer Engineering",
        institute_name: "Marwadi University",
        icon: marwadi,
        iconBg:"#AFD2E8",
        date: "September 2022 - September 2026",
        points: [
            "I am currently pursuing my B.Tech in Computer Engineering at Marwadi University, Rajkot. Currently, I am in my pre-final year, eagerly diving deeper into the realms of computer engineering and technology.",

        ],
    },
    {
        title: "Senior Secondary Education",
        institute_name: "Collage of Commerence ,Science and Arts",
        icon: coc,
        iconBg:"#0129E1",
        date: "March 2020 - March 2022",
        points: [
            "I have completed my Senior secondary education with an impressive 82% grade, laying a solid foundation for my academic journey in computer engineering..",
        ],
    },
    {
        title: "Secondary Education",
        institute_name: "Mother Tersa Tiny Tots English School",
        icon: mtt,
        iconBg:"#F1EB16",
        date: "March 2018 - March 2020",
        points: [
            "I completed my secondary education with an outstanding 87% grade, reflecting my dedication and commitment to academic excellence..",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/gaurav031',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gaurav-kumar-3966941b5/',
    }
];

export const projects = [
    {
        iconUrl: snapvibe,
        theme: 'btn-back-blue',
        name: 'SnapVibe-a Social Media Website',
        description:[
         'Developed Snap Vibe, a full-stack social media website using React.js, Node.js, and Express.js, with MongoDB Atlas for database management.',
         ' users to share personal pictures and interact with friends’ posts within a seamless and intuitive interface.'
        ],
        link: 'https://github.com/gaurav031/snapVibe',
        livelink: "",
    },
    {
        iconUrl: vibeexchange,
        theme: 'btn-back-black',
        name: 'VibeExchange-a Viedo Calling Website',
        description:[
            'Spearheaded the development of Vibe Exchange, a secure video calling website built with React.js and Material.UI for the frontend, and Node.js with Socket.IO for the backend..',
            'Implemented a privacy-focused approach by designing the platform to generate unique access codes for each session, eliminating the need for user data collection, thereby ensuring maximum confidentiality and security for all users.'
           ],
        link: 'https://github.com/gaurav031/VibeExchange',
        livelink:'https://vibeexchange.netlify.app/'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ghumte Raho - a travelling management desktop app',
        description:[
            'Utilized the Swing framework for GUI development and MySQL for database management.',
            'Expanded proficiency in MySQL database management and Swing GUI development..',
            'Enhanced user experience with intuitive features, demonstrating skill in creating dynamic and user-centric desktop applications.'
           ],
        link: 'https://github.com/gaurav031/Ghumte-Raho',
    },
    {
        iconUrl: luna,
        theme: 'btn-back-black',
        name: 'Luna Craze  E-Commerce Website ',
        description:[
            'I designed and coded a responsive e-commerce website akin to Flipkart, using HTML, CSS, JavaScript, and Bootstrap. This project deepened my understanding of web development and cultivated essential skills in front-end technologies and responsive design.',
           ],
        link: 'https://github.com/gaurav031/Luna-Craze-E-Commerce-website',
        livelink:'https://gaurav031.github.io/Luna-Craze-E-Commerce-website/'
    },
    
];
