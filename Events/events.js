/** @format */

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("res", (name, id) => {
	console.log(`Data received,Name: ${name} Age: ${id}`);
});
customEmitter.on("res", () => {
	console.log(`New data received`);
});
customEmitter.emit("res", "Emma", 21);

/* customEmitter.on("res", () => {
	console.log(`Data received`);
});
customEmitter.on("res", () => {
	console.log(`New data received`);
}); 


customEmitter.emit("res");
*/
