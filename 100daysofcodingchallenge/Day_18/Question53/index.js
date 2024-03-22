//Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var computerProgrammer = {
    languages: ["JavaScript", "TypeScript", "C++"],
    tools: ["Cloud 9", "Bitbucket", "Node.js"],
    Frameworks: ["Django", "AngularJS", "Laravel"],
};
var languages = computerProgrammer.languages, tools = computerProgrammer.tools, Frameworks = computerProgrammer.Frameworks;
console.log("Languages:".concat(languages[0], ", tools:").concat(tools[0], ", Frameworks:").concat(Frameworks[0]));
