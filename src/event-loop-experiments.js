const fs = require("fs");

Promise.resolve().then(() => {
  console.log("Experiment 1: Asynchronous Execution - that happens in the inner event loop at the promise phase");
});

console.log("Experiment 2: Synchronous Execution - that executes first and on the main thread");

setTimeout(() => {
  console.log("Experiment 3: Asynchronous Execution - that happens in the outter event loop at the timer phase");
}, 0);

fs.readFile("test.txt", () => {
  console.log("Experiment 4: Asynchronous Execution - that happens in the outter event loop at the I/O phase");
});

process.nextTick(() => {
  console.log("Experiment 5: Asynchronous Execution - that happens in the inner event loop at the next tick phase");
});

fs.readFile("test.txt", () => {
  Promise.resolve().then(() => {
    console.log("Experiment 6: Asynchronous Execution - that happens in the inner event loop at the promise phase");
  });

  console.log("Experiment 7: Synchronous Execution - that executes before the promise phase");

  setTimeout(() => {
    console.log("Experiment 8: Asynchronous Execution - that happens in the outter event loop at the timer phase");
  }, 0);

  process.nextTick(() => {
    console.log("Experiment 9: Asynchronous Execution - that happens in the inner event loop at the next tick phase");
  });
  console.log("Experiment 10: Synchronous Execution - that executes before the next tick phase");
});

setImmediate(() => {
  console.log("Experiment 11: Asynchronous Execution - that happens in the outter event loop at the check phase");
});
