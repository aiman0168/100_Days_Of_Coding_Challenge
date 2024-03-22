//Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let computerProgrammer = {
    languages: ["JavaScript", "TypeScript", "C++"],
    tools: ["Cloud 9","Bitbucket","Node.js"],
    Frameworks: ["Django", "AngularJS", "Laravel"],
};

let {languages, tools, Frameworks} = computerProgrammer;

console.log(`Languages:${languages[0]}, tools:${tools[0]}, Frameworks:${Frameworks[0]}`);