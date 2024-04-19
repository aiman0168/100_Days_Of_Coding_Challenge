//Create two modules; one that exports a class, and another that imports the class and creates an instance.
import {Person} from "./index2";

const alice = new Person("Alice");
alice.greet();