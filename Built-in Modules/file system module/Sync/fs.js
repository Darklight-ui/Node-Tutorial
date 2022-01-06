/** @format */

const { readFileSync, writeFileSync } = require("fs");
const read = readFileSync("./content/text.txt", "utf8");
const sendRead = readFileSync("./content/text.txt", "utf8");
const write = writeFileSync(
	"./content/second-text.txt",
	`this is the second file: ${read} all done`,
);
const write2 = writeFileSync(
	"./content/text.txt",
	`this is the second file: ${read} all done`,
);
console.log(read, sendRead);
