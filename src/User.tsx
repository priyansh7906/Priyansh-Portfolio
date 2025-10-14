import { Stack } from "@mantine/core";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandWhatsapp } from "@tabler/icons-react";
import { link } from "fs";
import { title } from "process";


const Info = {
    name: "Priyansh Somvanshi",
    Stack: ["Software Engineer", "Full Stack Developer", "Network Engineer", "Freelancer"],
    bio: "I'am a passionate software engineer with a strong background in competitive programing, freelancing and development. I specialize in crafting efficient and scalable solution, deliver top-notch web applications, and provide freelance services that exceed client expectations, Let's connect and create something amazing together!",
}

const ProjectInfo = [
    {
        title: "calculator",
        description: "A simple, user-friendly calculator app for performing basic arithmetic operations like addition, subtraction, multiplication, and division. Built for quick calculations with an intuitive interface and responsive design. Suitable for everyday use and easy integration or customization.",
        image: "calc.png",
        live: false,
        technologies: ["HTML", "CSS", "Reactjs", "JAVA", "javascript"],
        link: "https://priyansh7906.github.io/calculator/",
        github: "https://github.com/priyansh7906/calculator"
    },
    {
        title: "Weather App",
        description: "A weather app that provides real-time weather information for any location. It features a clean and intuitive interface, allowing users to easily search for cities and view current weather conditions, forecasts, and other relevant data. The app is built using modern web technologies and integrates with a reliable weather API to ensure accurate and up-to-date information.",
        image: "weather.png",
        live: false,
        technologies: ["HTML", "CSS", "Tailwind", "JAVA", "javascript"],
        link: "https://priyansh7906.github.io/weather-app/",
        github: "https://github.com/priyansh7906/weatherApp"
    },
    {
        title: "dictionaryApp",
        description: "A dictionary app that allows users to look up word definitions, synonyms, and antonyms. It features a simple and user-friendly interface, making it easy for users to search for words and access their meanings quickly. The app is built using modern web technologies and integrates with a reliable dictionary API to provide accurate and comprehensive word information.",
        image: "dictionary.png",
        live: false,
        technologies: ["HTML", "CSS", "React", "Springboot", "javascript"],
        link: "https://priyansh7906.github.io/dictionary-app/",
        github: "https://github.com/priyansh7906/dictionary-app"
    },
    {
        title: "Digital Clock",
        description: "A digital clock app that displays the current time in a clear and easy-to-read format. It features a sleek and modern design, making it a stylish addition to any desktop or mobile device. The app is built using modern web technologies and can be easily customized to suit individual preferences, such as changing the color scheme or adding additional features like alarms or timers.",
        image: "digitalclock.png",
        live: false,
        technologies: ["HTML", "CSS", "React", "JAVA", "javascript"],
        link: "https://priyansh7906.github.io/digital-clock/",
        github: "https://priyansh7906.github.io/digital-clock/"
    },

    {
        title: "Ai recipe finder",
        description: "An AI-powered recipe finder that helps users discover new and exciting recipes based on their preferences and dietary restrictions. The app uses advanced machine learning algorithms to analyze user input and provide personalized recipe recommendations, making it easy for users to find delicious meals that fit their lifestyle. With a user-friendly interface and a vast database of recipes, this app is perfect for foodies and home cooks alike.",
        image: "Ai recipe.png",
        live: true,
        technologies: ["HTML", "CSS", "React", "OpenAI", "javascript"],
        link: "https://priyansh7906.github.io/AI-recipes-finder/",
        github: "https://github.com/priyansh7906/AI-recipes-finder"
    },
    {
        title: "network-monitor",
        description: "A network monitor app that allows users to track and analyze their network performance in real-time. It features a user-friendly interface that displays key metrics such as bandwidth usage, latency, and packet loss, making it easy for users to identify and troubleshoot network issues. The app is built using modern web technologies and can be customized to suit individual preferences, such as setting up alerts for specific network events or generating detailed reports.",
        image: "network.jpg",
        live: false,
        technologies: ["HTML", "CSS", "React", "JAVA", "javascript"],
        link: "https://priyansh7906.github.io/network-monitor/",
        github: "https://github.com/priyansh7906/network-monitor"
    }

]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "Bootstrap",]
    },
    {
        title: "Backend",
        skills: ["SpringBoot", "Node JS", "Express JS", "MYSQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "JAVA", "JavaScript", "TypeSCript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS code", "Spring Tool Suite", "MicrosoftOffice", "MYSQL WorkBench", "Eclipse IDE"]
    }
]
const sociallinks = [
    { link: "https://github.com/priyansh7906", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/priyansh-somvanshi-0850b6252/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/thakur_7906/", icon: IconBrandInstagram },
    { link: "https://x.com/home", icon: IconBrandTwitter },
    { link: "https://wa.me/+917906876252", icon: IconBrandWhatsapp },
]

const ExperienceInfo = [
    {
        Role: "JAVA full stack developer",
        company: "HCLTech",
        date: "April 2025 - Present",
        desc: "I led Software Development with Spring Boot, React and Angular, creating scalable microservices and interfaces. I optimized performance by integrating Frontend and Beckend, and enhanced security with RESTful APIs. Collaborating in Agile teams, I fostered innocation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MYSQL", "MongoDB", "Microservices"]
    },
    {
        Role: "Intern JAVA",
        company: "WEBkul",
        date: "April 2023 - 2025",
        desc: "I leveraging skills in Java, Selenium, and automation testing to design and implement automated testing frameworks. The individual also worked on optimizing database performance and collaborating with cross-functional teams..",
        skills: ["Java", "Hibernate", "selenium", "Jenkins", "MYSQL", "MongoDB", "Automation testing"]
    }
]

const Slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",

]

export { Info, ProjectInfo, SkillInfo, ExperienceInfo, Slugs, sociallinks };
