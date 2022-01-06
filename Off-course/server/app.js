/** @format */

const express = require("express");
const path = require("path");
const port = 5000;
const app = express();
const { Products } = require("../public/data");
app.use(express.static("../../Off-course/public/css/"));

app.get("/", (req, res) => {
	res
		.status(200)
		.sendFile(path.resolve(__dirname, "../../Off-course/index.html"));
});
app.get("/api/product/", (req, res) => {
	const lessProductDetail = Products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(lessProductDetail);
});
// Hard-coding specific product...
/* app.get("/api/product/1", (req, res) => {
	const singleProductDetail = Products.find((product) => product.id === 1);
	res.send(singleProductDetail);
}); */

app.get("/api/product/:productID", (req, res) => {
	console.log(req.params);
	const { productID } = req.params;
	const singleProductDetail = Products.find(
		(product) => product.id === Number(productID),
	);
	if (!singleProductDetail) {
		return res
			.status(404)
			.sendFile(path.resolve(__dirname, "../../Off-course/404.html"));
	} else {
		return res.json(singleProductDetail);
	}
});

app.get("/api/product/:productID/reviews/:reviewID", (req, res) => {
	res.send("Hello World");
	console.log(req.params);
});
app.listen(port, () => {
	console.log(`server running on http://localhost:${port}`);
});
