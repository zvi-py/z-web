const fs = require('fs');

const js = fs.readFileSync('zaveriya_bundle.js', 'utf8');

// Find all items in projects array
const projMatch = js.match(/const\s+v5\s*=\s*(\[\{id:"aurael".*?\}\]);/);
let projects = [];
if (projMatch) {
  try {
    const d = { jsx: () => ({}), jsxs: () => ({}) };
    projects = eval(projMatch[1]);
  } catch (e) {
    console.error("Eval error on projects:", e);
  }
}

// Find experiences array
const expMatch = js.match(/\[\{id:"maincrafts-technology".*?\}\]/);
let experiences = [];
if (expMatch) {
  try {
    experiences = eval(expMatch[0]);
  } catch (e) {
    console.error("Eval error on exp:", e);
  }
}

// Find education or other arrays
console.log("Projects found:", projects.length);
console.log("Experiences found:", experiences.length);

fs.writeFileSync('zaveriya_parsed_clean.json', JSON.stringify({
  projects,
  experiences
}, null, 2));

console.log("Written zaveriya_parsed_clean.json successfully");
