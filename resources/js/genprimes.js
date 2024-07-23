
// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota, message.data.command);
  }
  else
  {
    const primes = [];
    postMessage({primes: primes, message: message.data.command});
    }
});


// Generate primes (very inefficiently)
function generatePrimes(quota, mes) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
      postMessage({primes: primes, message: "working"});
    }
  }

  // When we have finished, send a message to the main thread,
  // including the number of primes we generated.
  //postMessage(primes.length);
  postMessage({primes: primes, message: mes});
}