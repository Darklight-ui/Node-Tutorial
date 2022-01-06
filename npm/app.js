/** @format */

/* const express = require("express");
const path = require("path");
const port = 5000;
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
	console.log(`server running on port:${port}`);
}); */

// ADDING THE INDEX.HTML INSIDE THE PUBLIC FOLDER WILL ALSO GIVE YOU THE SAME RESULT
const express = require("express"); 	
const path = require("path");
const port = 5000;
const app = express();

app.use(express.static("./public"));

app.listen(port, () => {
	console.log(`serving running on port:${port}`);
});
