import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { sleep } from "./Utils.js";

const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "GoLang",
    "C++",
    "C#",
    "Dart",
    "Solidity",
  ],
  frontend: ["HTML", "Tailwind CSS", "React", "Flutter", "Next.js", "RazorPay"],
  backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "SST",
    "AWS",
    "NEXT.js",
    "HardHat",
    "RazorPay",
    "Blockchain",
    "Golang",
    "Rust",
  ],
};

async function languages() {
  console.log(`
  ${chalk.bold("My Skills in Languages:")}
  `);

  const languagesString = skills.languages.map((tech) =>
    gradient.cristal(tech)
  );

  console.log(`
  ${chalk.bold("Languages:")} ${languagesString}
  `);
}

async function forntend() {
  console.log(`
  ${chalk.bold("My Skills in Frontend:")}
  `);

  const frontendString = skills.frontend.map((tech) => gradient.cristal(tech));

  console.log(`
  ${chalk.bold("Frontend:")} ${frontendString}
  `);
}

async function backend() {
  const backendString = skills.backend.map((tech) => gradient.cristal(tech));

  console.log(`
  ${chalk.bold("Backend:")} ${backendString}
  `);
}

export default async function ShowSkills() {
  const listIteration = [];
  const skillsAni = chalkAnimation.rainbow(
    figlet.textSync("Skills", {
      width: 80,
      font: "Standard",
      horizontalLayout: "full",
    }),
    2
  );
  await sleep(1000);
  skillsAni.stop();

  while (true) {
    const { skill } = await inquirer.prompt({
      type: "list",
      name: "skill",
      default: "Languages",
      choices: ["Languages", "Frontend", "Backend", "Exit"],
      message: "Which skills you want to see?",
    });

    if (listIteration.includes("Languages" && "Frontend" && "Backend")) {
      console.log(`
      ${chalk.bold("You have already seen all skill.")}
      `);
      break;
    } else if (listIteration.includes(skill)) {
      console.log(`
      ${chalk.bold("You have already seen this skill.")}
      `);
      continue;
    } else {
      listIteration.push(skill);
    }

    if (skill === "Exit") break;
    else if (skill === "Languages") await languages();
    else if (skill === "Frontend") await forntend();
    else if (skill === "Backend") await backend();
  }
}
