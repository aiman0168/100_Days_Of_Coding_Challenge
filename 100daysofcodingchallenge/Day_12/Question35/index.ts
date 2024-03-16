//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ["dog", "goat", "cat"];

console.log("names of these animals:")
for(const animal of animals){
    console.log(animal)
}
//print a statement about each animal
console.log("Statement about each animal:")
for (const animal of animals){
    if (animal === 'dog'){
        console.log(`A ${animal} would make a great pet`)
    }else if (animal === 'cat'){
        console.log(`A ${animal} would be a good companion at home`)
    }else if (animal === 'goat'){
        console.log(`A ${animal} is an adorable pet`)
    }
}

//common characterstics
console.log("What these animals have in common:")
console.log("Any of these animals would make a great pet!");