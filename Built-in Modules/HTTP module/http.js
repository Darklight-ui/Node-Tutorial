/** @format */

const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("this is the Home ");
	}
	if (req.url === "/sales") {
		res.end("this is the sales ");
	}
	res.end("No Page Found");
});

server.listen(5050, () => {
	console.log("server running  on port 5050");
});

// Basic Http res & req setup

/* const port = 3001;
const http = require("http");
const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(`<h1> Home Page </h1>`);
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(`<h1> About Page </h1>`);
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		res.write(`<h1> Error Page </h1>`);
		res.end();
	}
});

server.listen(port, () => {
	console.log(`Server Listening on http://localhost:${port}`);
}); */

/* 

const http = require("http");
const { readFileSync } = require("fs");
const port = 3001;

const homePage = readFileSync("./index.html");
const homeStyle = readFileSync("./styles.css");
const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(homePage);
		res.end();
	} else if (url === "/styles.css") {
		res.writeHead(200, { "content-type": "text/css" });
		res.write(homeStyle);
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(`<h1> About Page </h1>`);
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		res.write(`<h1> Error Page </h1>`);
		res.end();
	}
});

server.listen(port, () => {
	console.log(`Server Listening on http://localhost:${port}`);
});
 */
