import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import Projects from "./Projects.js";
import open from "open";
import { sleep } from "./Utils.js";

async function ShowProjects() {
  let exitFn = false;
  let start = false;
  console.log(`
  ${chalk.bold("I have worked on many projects.")}
  `);

  while (!exitFn) {
    const { again } = await inquirer.prompt({
      type: "confirm",
      name: "again",
      message: start
        ? "Do you want to see more projects?"
        : "Do you want to see my projects?",
    });

    start = true;

    if (again) {
      const projectNames = [...Projects].map((project) => project.name);
      const { project } = await inquirer.prompt({
        type: "list",
        name: "project",
        message: "Which project you want to see?",
        choices: projectNames,
      });

      const selectedProject = Projects.find((p) => p.name === project);
      const technologies = selectedProject.technologies.map(
        (tech) => tech.name
      );

      const rainbowTitle = chalkAnimation.rainbow(
        figlet.textSync(selectedProject.name, {
          width: 80,
          font: "Standard",
          horizontalLayout: "full",
        }),
        1
      );

      await sleep(1500);
      rainbowTitle.stop();
      const technologiesString = technologies
        .map((tech) => gradient.cristal(tech))
        .join(", ");

      console.log(`
      ${chalk.bold(selectedProject.description)}
      ${chalk.bold("Technologies Used:")} ${technologiesString}
      `);

      const { again } = await inquirer.prompt({
        type: "confirm",
        name: "again",
        default: false,
        message: "Do you want to see this project's code?",
      });

      if (again) {
        console.log(`
        ${chalk.bold(selectedProject.githubLink)}
        `);
        await open(selectedProject.githubLink);
      } else {
        console.log(`
        ${chalk.bold("Ok! You can go through other things.")}
        `);
      }
    } else {
      exitFn = true;
    }
  }
}

export default ShowProjects;
