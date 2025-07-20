//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding") 
let startsWithWelcome = inputString.trim().startsWith("Welcome");
let endsWithToday = inputString.trim().endsWith("today.");

// Logging results of Searching
console.log("hasJavaScript:", hasJavaScript);
console.log("codingPosition:", codingPosition);
console.log("startsWithWelcome:", startsWithWelcome);
console.log("endsWithToday:", endsWithToday);

// 2. Transforming
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let trimmedString = inputString.trim();
let replacedString = inputString.replace("JavaScript", "coding");

// Logging results of Transforming
console.log("lowercaseString:", lowercaseString);
console.log("uppercaseString:", uppercaseString);
console.log("trimmedString:", trimmedString);
console.log("replacedString:", replacedString);

// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");

// Logging result of Breaking Apart
console.log("wordsArray:", wordsArray);

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0);
let extractedBootcamp = inputString.slice(inputString.indexOf("Bootcamp"), inputString.indexOf("Bootcamp") + "Bootcamp".length);

// Logging results of Retrieving
console.log("firstCharacter:", firstCharacter);
console.log("extractedBootcamp:", extractedBootcamp);
