// How this works:

// Each character is a delayed write, using setTimeout

// With each delayed write, we start with returning the cursor to the beginning

// We then write the next character in the animation

// Spaces are added after the character so that the cursor moves far enough away from our animation

// Removing the space padding at the end of the strings will mean that the cursor will sit on top of the animation, making it harder to see
// Instruction
// Add additional characters in order to complete one full animation of this nearly completed "spinner", so that it completes a full circle as shown in the demo above.



setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

// Completing the circle:
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

// Back to starting point:
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);
