// Step 2: Declare and assign values to variables

const timeOfDay = "spooky night"; // String
const mathResult = 10 - 7; // Number
const booleanValue = timeOfDay.includes("night"); // Boolean expression

// Step 1: Paste in one of the story templates above
const story = `"On a ${timeOfDay}, I ventured into the haunted house. The creaking walls seemed to whisper, sending chills down my spine. Suddenly, a ghost appeared, its glowing eyes piercing through the darkness. My heart raced as it floated silently toward me. Did you know 10 - 7 equals ${mathResult}? Spooky, right?"`

// Step 3: Use string interpolation to insert the variables into the story
document.getElementById("madlibs-output").textContent = story // Output the story to the HTML element with id "madlibs-output"