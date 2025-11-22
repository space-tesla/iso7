const fs = require('fs').promises;

async function readFiles() {
  try {
    const file1 = await fs.readFile('./data/file1.txt', 'utf8');
    const file2 = await fs.readFile('./data/file2.txt', 'utf8');
    const file3 = await fs.readFile('./data/file3.txt', 'utf8');

    console.log("File 1:", file1);
    console.log("File 2:", file2);
    console.log("File 3:", file3);

  } catch (error) {
    console.log("Error:", error);
  }
}

readFiles();


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
// Expected Output: Displays the content of all three files
