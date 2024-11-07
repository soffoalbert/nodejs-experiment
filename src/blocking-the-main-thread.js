// Simulating CPU-intensive work that blocks the main thread
console.log('Starting heavy computation...');
const start = Date.now();

// Create a synchronous loop that will block the main thread for several seconds
for (let i = 0; i < 5_000_000_000; i++) {
  // Perform useless calculations to simulate CPU-intensive work
  Math.sqrt(i) * Math.random();
}

const end = Date.now();
console.log(`Heavy computation finished after ${end - start}ms`);

// This setTimeout won't execute until after the loop finishes
// because the main thread is blocked
setTimeout(() => {
  console.log('This message is delayed due to main thread blocking');
}, 0);

console.log('End of script');
