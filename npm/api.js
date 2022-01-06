/** @format */

const express = require("express");
const port = 5000;
const app = express();
const { Products } = require("./data");

app.get("/", (req, res) => {
	res.send(`<h1>Home Page</h1><a href="/api/product">Products</a>`);
});

app.get("/api/product/", (req, res) => {
	const newProduct = Products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProduct);
	console.log(newProduct);
});

app.get("/api/product/:productID", (req, res) => {
	const { productID } = req.params;
	const singleProduct = Products.find(
		(product) => product.id === Number(productID),
	);
	console.log(req.params);
	res.json(singleProduct);
});

app.listen(port, () => {
	console.log("server running on port 5000");
});
