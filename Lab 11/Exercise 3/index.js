const EventEmitter = require("events"); // Import events module

// Create event emitter object
const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on("greet", (name) => {
    console.log(`Hello ${name} (Listener 1)`);
});

// Listener 2 (multiple listeners)
eventEmitter.on("greet", (name) => {
    console.log(`Welcome ${name} (Listener 2)`);
});

// Another event
eventEmitter.on("bye", (name) => {
    console.log(`Goodbye ${name}`);
});

// Emit events (synchronous)
console.log("Triggering events...\n");

eventEmitter.emit("greet", "Lokeshwar");
eventEmitter.emit("bye", "Lokeshwar");

// Asynchronous event (delayed execution)
setTimeout(() => {
    console.log("\nTriggering async event...\n");
    eventEmitter.emit("greet", "Delayed User");
}, 2000);