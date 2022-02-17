// Downwards
//
// document.getElementById // document only method
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector
// document.querySelectorAll
// element.children

// Upwards
//
// element.parentElement
// element.closest

// Sideways
//
// element.nextElementSibling
// element.previousElementSibling
// combine using parentElement, children, and index



function changeColor(elements) {
    for (const element of elements){
        element.style.backgroundColor = 'yellow'
    }
}


/*
Exercise

Practice traversing the DOM with the methods taught in this lesson. Uncomment the additional HTML in the index.html file and then do these tasks:

    Select .characters with document.querySelector
    Select .humans from .characters
    Select all humans with querySelectorAll, starting from .humans
    Select all hobbits with children
    Select Merry (the hobbit)
    Select .enemies from Sauron
    Select the .characters div from Nazgûl
    Select Elrond from Glorfindel
    Select Legolas from Glorfindel
    Select Arwen from Glorfindel
*/


/*
Exercise

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
