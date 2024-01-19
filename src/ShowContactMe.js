import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import open from "open";
import { sleep } from "./Utils.js";

export default async function ShowContactMe() {
  const rainbowTitle = chalkAnimation.rainbow(
    figlet.textSync("Contact Me", {
      width: 80,
      font: "Standard",
      horizontalLayout: "full",
    }),
    1
  );

  await sleep(1500);
  rainbowTitle.stop();

  while (true) {
    const { contact } = await inquirer.prompt({
      type: "list",
      name: "contact",
      message: "How you want to contact me?",
      choices: ["Email", "Github", "Twitter", "Instagram", "LinkedIn", "Exit"],
    });

    if (contact === "Email") {
      console.log(`
    ${chalk.bold("Email:")} ${chalk.blue("harshkeshri1234567@gmail.com")}
    `);
      await open("mailto://harshkeshri1234567@gmail.com");
    } else if (contact === "Github") {
      console.log(`
    ${chalk.bold("Github:")} ${chalk.blue("")}`);
      await open("https://github.com/airbornharsh");
    } else if (contact === "Twitter") {
      console.log(`
      ${chalk.bold("Twitter:")} ${chalk.blue("https://x.com/airbornharsh")}`);
      await open("https://x.com/airbornharsh");
    } else if (contact === "Instagram") {
      console.log(`
      ${chalk.bold("Instagram:")} ${chalk.blue(
        "https://instagram.com/airbornharsh"
      )}`);
      await open("https://instagram.com/airbornharsh");
    } else if (contact === "LinkedIn") {
      console.log(`
      ${chalk.bold("Linkedin:")} ${chalk.blue(
        "https://linkedin.com/in/airbornharsh"
      )}`);
      await open("https://linkedin.com/in/airbornharsh");
    } else if (contact === "Exit") {
      break;
    }
    await sleep(1000);
  }
}
