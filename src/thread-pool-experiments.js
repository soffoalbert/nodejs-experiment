process.env.UV_THREADPOOL_SIZE = 4;
const crypto = require('crypto');

console.log('Starting crypto operations...');

const start = Date.now();

// Execute 5 parallel pbkdf2 hashing operations
for (let i = 0; i < 5; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Crypto ${i + 1} finished in ${Date.now() - start}ms`);
  });
}
