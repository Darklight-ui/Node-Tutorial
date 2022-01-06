/** @format */

/* INSTEAD OF WRITING RANDOM RAPID FUNCTION TO READ YOUR FILE AND WRITE A FILE YOU COULD USE THE "UTIL" MODULE AND IT'S "PROMISIFY" METHOD TO AVOID 'EM */

/* const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
	try {
		const read = await readFilePromise("./writing.txt", "utf8");
		console.log(read);
		await writeFilePromise("./writing.txt", "THIS SHOULD BE FUN!");
	} catch (error) {
		console.log(error);
	}
};
start();
 */

/* THE ABOVE CODE CAN ALSO BE WRITTEN LIKE THIS => */
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
	try {
		const read = await readFile("./writing.txt", "utf8");
		console.log(read);
		await writeFile("./writing.txt", "THIS SHOULD BE FUN!");
	} catch (error) {
		console.log(error);
	}
};
start();
