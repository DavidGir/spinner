const spinnerCharacters = ['|', '/', '-', '\\'];
// Initial delay before first character shows up:
let delay = 100;
// Interval for the amount of time you want between each character spinner:
let interval = 200;

// For loop to complete a full circle so length * 2:
for (let i = 0; i < spinnerCharacters.length * 2; i++) {
  setTimeout(() => {
    // When i reached the length of spinnerCharacters it circles and starts at 0 again:
    process.stdout.write(`\r${spinnerCharacters[i % spinnerCharacters.length]}   `);
  }, delay);
  // Each character appears with a delay that is 200ms longer than the previous one creating a staggering effect:
  delay += interval;
}
