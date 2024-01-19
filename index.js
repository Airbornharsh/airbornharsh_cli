#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import ShowProjects from "./src/ShowProjects.js";
import ShowAboutMe from "./src/ShowAboutMe.js";
import { sleep } from "./src/Utils.js";
import ShowSkills from "./src/ShowSkills.js";
import ShowContactMe from "./src/ShowContactMe.js";

let exit = false;

async function welcome() {
  console.log(
    gradient.teen(figlet.textSync("AirbornHarsh", { horizontalLayout: "full" }))
  );

  sleep(1000);

  const rainbowTitle = chalkAnimation.rainbow("Welcome to the New World!\n", 1);
  await sleep(1000);
  rainbowTitle.stop();

  console.log(`
  ${chalk.bold("Hey My Name is Harsh and I am a Full Stack Developer.")}
  `);
}

async function askName() {
  const { name } = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name?",
  });

  console.log(`
  ${chalk.bold(`Hey ${name}! I am glad to meet you.`)}
  `);

  return name;
}

async function askRole() {
  const { role } = await inquirer.prompt({
    type: "list",
    name: "role",
    message: "What is your role?",
    choices: ["Developer", "Designer", "Other"],
  });

  return handleFunction(role);
}

async function handleFunction(role) {
  const snipper = createSpinner("Are we Same\n").start();
  await sleep(1000);

  if (role === "Developer") {
    snipper.success({
      text: chalk.bold("We both are Developer. Let's make something together."),
    });
  } else {
    snipper.error({
      text: chalk.bold("It's ok we can know about other's Field."),
    });
  }
  return role;
}

async function interestedIn() {
  const { interest } = await inquirer.prompt({
    type: "list",
    name: "interest",
    message: "What are you intrested in?",
    choices: ["About Me", "Skills", "Projects", "Contact Us", "Exit"],
  });

  if (interest === "About Me") {
    await ShowAboutMe();
  } else if (interest === "Skills") {
    await ShowSkills();
  } else if (interest === "Projects") {
    await ShowProjects();
  } else if (interest === "Contact Us") {
    await ShowContactMe();
  } else if (interest === "Exit") {
    const { again } = await inquirer.prompt({
      type: "confirm",
      name: "again",
      message: "Are you sure to exit?",
    });
    if (again) {
      console.log(
        chalk.bold(
          "You can also check my GitHub Profile: https://github.com/airbornharsh and Twitter Profile: https://twitter.com/airbornharsh"
        )
      );
      await sleep(1000);
      const ani = chalkAnimation.rainbow(
        figlet.textSync("Good Bye", {
          width: 80,
          font: "Standard",
          horizontalLayout: "full",
        }),
        2
      );
      await sleep(2000);
      ani.stop();
      exit = true;
    } else {
    }
  }

  return interest;
}

const startUp = async () => {
  await welcome();
  await askName();
  sleep(1000);
  // await askRole();
  while (!exit) {
    await interestedIn();
  }
};

startUp();
