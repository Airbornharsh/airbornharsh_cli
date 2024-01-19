#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  console.log(
    gradient.teen(
      figlet.textSync("AirbornHarsh", { horizontalLayout: "full" })
    )
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

await welcome();
const name = await askName();
console.log(`
${chalk.bold(`Hey ${name}! I am glad to meet you.`)}
`);
sleep(1000);

await askRole();
