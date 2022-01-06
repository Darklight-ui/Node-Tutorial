/** @format */

const { rejects } = require("assert");
const { readFile, writeFile } = require("fs");
const { resolve } = require("path");

const getText = (path) => {
	return new Promise((resolve, rejects) => {
		readFile(path, "utf8", (err, data) => {
			if (err) {
				rejects(err);
			} else {
				resolve(data);
			}
		});
	});
};

const start = async () => {
	try {
		const first = await getText("./content/text.txt");
		console.log(first);
	} catch (error) {
		console.log(error);
	}
};
start();

/* getText("./content/text.txt")
	.then((result) => console.log(result))
	.catch((err) => console.log(err)); */

// readFile("./content/text.txt", "utf8", (err, result) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log(result);
// });

// OR.....

/* setInterval(() => {
	readFile("./content/text.txt", "utf8", (err, res) => {
		if (err) {
			console.log(err);
			return;
		}
		const first = res;
		console.log("Done with first reading");
		writeFile(
			"./content/firstNewFile.txt",
			"this is the new file",
			"utf8",
			(err, res) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("Done with first writing");
			},
		);
		readFile("./content/text.txt", "utf8", (err, res) => {
			if (err) {
				console.log(err);
				return;
			}
			const second = res;
			console.log("done with second reading");
			writeFile(
				"./content/secondNewFile.txt",
				"this is the new file",
				"utf8",
				(err, res) => {
					if (err) {
						console.log(err);
						return;
					}
					console.log("Done with second writing");
				},
			);
		});
	});
}, 5000);
console.log("starting next file"); */

/* 	readFile("./content/text.txt", "utf8", (err, res) => {
		if (err) {
			console.log(err);
			return;
		}
		const first = res;
		console.log("Done with first reading");
		writeFile(
			"./content/firstNewFile.txt",
			"this is the new file",
			"utf8",
			(err, res) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("Done with first writing");
			},
		);
		readFile("./content/text.txt", "utf8", (err, res) => {
			if (err) {
				console.log(err);
				return;
			}
			const second = res;
			console.log("done with second reading");
			writeFile(
				"./content/secondNewFile.txt",
				"this is the new file",
				"utf8",
				(err, res) => {
					if (err) {
						console.log(err);
						return;
					}
					console.log("Done with second writing");
				},
			);
		});
	}); */
