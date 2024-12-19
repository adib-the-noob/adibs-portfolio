import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate Backend Developer skilled in Python, Django and FastAPI. With 2 years of hands-on experience in AWS, CI/CD pipelines and Containerization for seamless deployments and scaling. Beyond backend development, I enjoy exploring innovations in video streaming, AI-driven solutions and microservices so on. My goal is to build impactful software that solves real-world challenges and enhances user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  {
    year: "2022 - Present",
    role: "Software Engineer",
    company: "Maverick Softwares",
    description: `Designed and developed highly scalable and efficient backend systems using Python, FastAPI,  Django Rest Framework, PostgreSQL, Docker, Celery, and Redis. Deployed applications to AWS ensuring seamless cloud integration. Built robust backends for mentoring and vehicle renting apps, focusing on delivering exceptional user experiences.`,
    technologies: ["Python", "Django", "FastAPI", "MongoDB", "PostgreSQL", "AWS", "Docker"],
  },
];

export const PROJECTS = [
  {
    title: "HLS Video Transcoder Application",
    image: project1,
    documentation: "https://docs.google.com/document/d/1tBYYhKEMS6DsvuMOnqGn4sLzDx1NAZhm4FrKQIJxU9s/edit?usp=sharing",
    description:
      "A robust video transcoding service leveraging HLS with distributed architecture using FastAPI, FFMPEG, and AWS services for streaming on Adaptive Bitrates like 1080p, 720p, 480p based on client's Network Condition.",
    technologies: ["FastAPI", "FFMPEG", "AWS ECS", "Lambda", "SQS", "S3", "CloudFront"],
  },
  {
    title: "Btalk - Social Media Application",
    image: project2,
    documentation: "#",
    description:
      "A scalable social media backend with real-time communication through WebSocket integration for both Private and Group chats and cloud deployment for optimized performance on AWS using Docker and NGINX as reverse proxy.",
    technologies: ["Django", "AWS", "WebSocket", "PostgreSQL", "Docker", "NGINX"],
  },
  {
    title: "Project Jeetubhaiya - Mentoring Platform",
    image: project3,
    documentation: "#",
    description:
      "A platform for connecting mentees with mentors, featuring user authentication, profile management, and third-party integrations for OTP verification and session scheduling with Mentors through Google Calender, which was deployed on Azure.",
    technologies: ["Django", "PostgreSQL", "Twillio", "Azure", "Google Calender API"],
  },
];


export const CONTACT = {
  address: " ",
  phoneNo: "+880 19310 92210 ",
  email: "mohammed.adib@gmail.com",
};
