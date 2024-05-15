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
// console.log(parent);

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
    Select Sauron
    Select .enemies from Sauron
    Select Nazgûl
    Select the .characters div from Nazgûl
    Select Glorfindel
    Select Elrond from Glorfindel
    Select Legolas from Glorfindel
    Select Arwen from Glorfindel
*/
