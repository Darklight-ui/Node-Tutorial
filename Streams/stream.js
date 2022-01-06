/** @format */

const { writeFile } = require("fs");
for (let i = 0; i < 10000; i++) {
	writeFile(
		"./content/bigFile.txt",
		`THIS IS MY ${i} BIG FILE...
        \n`,
		{ flag: "a" },
		(err, res) => {
			if (err) {
				console.log(err);
				return;
			} else {
				return;
				console.log("created");
			}
		},
	);
}
