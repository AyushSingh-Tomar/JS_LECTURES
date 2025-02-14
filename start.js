const fs = require('fs');
const path = require('path');

// Function to get all JS files recursively
function getJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recurse into subdirectories
      results = results.concat(getJsFiles(filePath));
    } else if (file.endsWith('.js')) {
      results.push(filePath);  // Add the JS file
    }
  });

  return results;
}

// Get all .js files in the project folder and subdirectories
const jsFiles = getJsFiles(__dirname);

// If no .js files are found
if (jsFiles.length === 0) {
  console.log('No JavaScript files found.');
  process.exit(1);
}

// Sort the files by the last modified time (most recent first)
const mostRecentFile = jsFiles
  .map(file => ({
    file,
    mtime: fs.statSync(file).mtimeMs
  }))
  .sort((a, b) => b.mtime - a.mtime)[0].file;

console.log(`Running the most recent JavaScript file: ${mostRecentFile}`);

// Run the most recent file using require()
require(mostRecentFile);

