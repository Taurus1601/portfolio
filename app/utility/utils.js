const projectList = [
  {
    Name: "Agnihotri Aerospace LLP Website",
    status: "Completed",
    Description: "Developed a responsive website for Agnihotri to showcase their products, designs, and achievements using Next.js, Tailwind CSS ,Achieved 30% growth for Agnihotri.",
    type: "Full Stack",
    imageUrl: "images/Agnihotri.jpg",
    link: "",
  },
  ,
  {
    Name: "BookSage",
    status: "Completed",
    Description: "Designed and Implemented the UI, built an efficient backend to store the records of student who are unable to buy textbooks for their studies and Provide them textbook and notes by taking donation from the sponsors.",
    imageUrl: "images/booksage.png",
    type: "Full Stack",
    link: "https://github.com/Taurus1601/studentManagement.git",
  },
  {
    Name: "attackGan-Intrusion Detection System",
    status: "Ongoing",
    Description: "Developing a model designed to bypass Host-based Intrusion Detection Systems, leveraging feedback to generate high-quality samples that evade detection while preserving network functionality.",
    type: "Cyber-Security",
    imageUrl: "images/ids.png",
    link: "#",
  },
];

const AboutMe = {
  Name: "Sanjan Athyady",
  Description:
  "Hey! I’m a CS student specialized in cybersecurity with a passion for web development. I’ve worked on full stack projects to create responsive websites. I’m all about turning ideas into reality through code. Let’s build something awesome together!",  imageUrl: "",
  skills: [
    "React.js",
    "Next.js",
    "Three.js",
    "Nodejs",
    "MySQL",
    "Express.js",
    "MongoDB",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Framer Motion",
  ],
};

const galleryImages = Array(20);
for (let i = 1; i <= 11; i++) {
  galleryImages[i - 1] = `/images/${i}.jpeg`;
}
galleryImages[12] = "/images/13.jpeg";
galleryImages[13] = "/images/16.jpeg";
galleryImages[14] = "/images/18.jpeg";

const navContent = [
  {
    Name: "Home",
    link: "/Home",
  },
  {
    Name: "Projects",
    link: "/Project",
  },
  {
    Name: "Gallery",
    link: "/Gallery",
  },
  {
    Name: "About",
    link: "/About",
  },
  {
    Name: "Get In Touch",
    link: "/Contact",
  },
];

export { projectList, AboutMe, galleryImages, navContent };
