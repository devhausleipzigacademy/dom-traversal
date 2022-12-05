function changeColorMany(elements) {
	for (const element of elements) {
		element.style.backgroundColor = "yellow";
	}
}
function changeColorOne(element) {
	element.style.backgroundColor = "yellow";
}

/////////////////////////
////  DOM Traversal  ////
/////////////////////////

// Universal (no direction)

// document.getElementById // document only method

// Downwards

// element.getElementsByClassName
// element.getElementsByTagName
// element.querySelector
// element.querySelectorAll
// element.children

// Upwards

// element.parentElement
// element.closest

// Sideways

// element.nextElementSibling
// element.previousElementSibling
// combine using parentElement, children, and index

/////////////////////
////  Exercises  ////
/////////////////////

/*
Practice traversing the DOM with the methods taught in this lesson. Uncomment the additional HTML in the index.html file and then do these tasks:

    Select .characters with document.querySelector
    Select .humans from .characters
    Select all humans with querySelectorAll, starting from .humans
    Select all hobbits with the "children" property of some element
    Select Merry (the hobbit) 
    Select .enemies from Sauron
    Select the .characters div from Nazgûl
    Select Elrond from Glorfindel
    Select Legolas from Glorfindel
    Select Arwen from Glorfindel
*/

const humansUL = document.querySelector(".humans");
const eachHuman = humansUL.querySelectorAll("li");
// changeColorMany(eachHuman);

const hobbitsUL = document.querySelector(".hobbits");
const eachHobbit = hobbitsUL.children;

// changeColorMany(eachHobbit);

const merry = hobbitsUL.children[2];
// changeColorOne(merry);

const enemiesUL = document.querySelector(".enemies");
const sauron = enemiesUL.children[0];

const enemiesAgain = sauron.closest(".enemies");
// changeColorOne(enemiesAgain);

const nazgul = enemiesUL.children[1];
// changeColorOne(nazgul);

const characters = nazgul.closest(".characters");
// changeColorOne(characters);

const glorfindel = document.querySelector(".elves > li:nth-child(2)");
// changeColorOne(glorfindel);

const elrond = glorfindel.parentElement.children[2];
// changeColorOne(elrond);

const legolas = glorfindel.parentElement.children[0];
// changeColorOne(legolas);

const arwen = glorfindel.parentElement.children[3];
// changeColorOne(arwen);

// =======================

/*
OPTIONAL EXTRA CREDIT:

Can you replicate the behavior of all of these CSS selectors using JavaScript?

https://www.w3schools.com/cssref/css_selectors.asp

Root
Universal
Element
Class
ID
Descendant
Child
Element + Class
Multiple Elements
Adjacent Sibling
General Sibling
First Child
Last Child
First of Type
Only of Type
Not

Attribute Selectors?
Pseudo Elements?

See https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
*/
