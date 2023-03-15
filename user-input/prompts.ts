import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const name = await $.prompt("What's your name?", {
  default: "Dax",
  mask: false,
  noClear: true,
});
console.log(name);

const result = await $.confirm("Would you like to continue?", {
  default: false,
  noClear: true,
});
console.log(result);

const index = await $.select({
  message: "What's your favourite colour?",
  options: [
    "Red", // 0
    "Green", // 1
    "Blue", // 2
    "Teal", // 3
  ],
});
console.log(index);

const networkInterfaceList = Deno.networkInterfaces();

const nics: Array<string> = [];

for (let i = 0; i < networkInterfaceList.length; i++) {
  nics[i] = `${networkInterfaceList[i].name}: ${
    networkInterfaceList[i].address
  }`;
}
const choice = await $.select({
  message: "Which Network Connection To Use?",
  options: nics,
});

console.log(choice);
