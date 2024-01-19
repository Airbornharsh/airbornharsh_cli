import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { sleep } from "./Utils.js";

const abouts = [
  "🚀 Started coding journey in November 2021 with HTML, CSS, and JavaScript on mobile phone",
  "💡 Explored DSA for 3 months using C++",
  "🎮 Learned game development for a hackathon",
  "🌐 Returned to web development in July with React.js",
  "🛠️ Joined internship and gained knowledge in AWS, serverless, and SST",
  "⚛️ Learned Next.js, Node.js, Express, and MongoDB",
  "🔗 Ventured into Blockchain, created a small polling app",
  "📱 Explored Flutter for 3-4 months, developed a production-level game 'Shore'",
  "🤖 Learned AIML and implemented projects like flower detection, animal detection, and age detection",
  "💻 Engaged in Full-stack development projects",
  "⏸️ Took a break for 3-4 months",
  "🐉 Learned Golang and built backend projects",
  "🐦 Created a Twitter clone using MERN stack",
  "📆 Started coding resolution for 366 days in 2024, documenting on Instagram and YouTube",
  "🦀 Currently learning Rust for blockchain and backend development",
  "♟️ Developed a chess app using MERN stack",
  "🎓 Expanding knowledge in continuous learning",
  "🌟 Passionate about innovation and problem-solving",
  "👨‍💻 Dedicated to building a tech-driven future",
];

const speeds = [
  5.2, 2.6, 3, 3.5, 4.5, 3.3, 3.5, 4.2, 5.4, 3, 2.5, 3, 2.7, 5, 3.7, 2.8, 3, 3,
  3,
];

export default async function ShowAboutMe() {
  const aboutMeAni = chalkAnimation.rainbow(
    figlet.textSync("About Me", {
      width: 80,
      font: "Standard",
      horizontalLayout: "full",
    }),
    2
  );
  await sleep(1000);
  aboutMeAni.stop();

  let i = 0;
  while (i < abouts.length) {
    const ani = chalkAnimation.karaoke(abouts[i], speeds[i]);
    await sleep(1000);
    ani.stop();
    i++;
  }
}
