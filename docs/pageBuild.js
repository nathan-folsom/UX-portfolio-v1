// NATE FOLSOM UX PORTFOLIO
// JS PAGE BUILDER FOR UNIVERSAL HTML ELEMENTS
//-----------------------------------------------//
// **1.0** UNIVERSAL PAGE HEADER

// CREATE HEADER DIV
let headerDiv = document.createElement('div');
headerDiv.className = ('headerItems');

// HEADER CONTENTS
//------
// NAV BUTTONS
let nav = [
  "<a class='contactNav' href='Contact'><h1>Contact</h1></a>",
  "<a class='aboutNav' href='About'><h1>About</h1></a>"
];
// JOIN HTML ARRAYS
let navButtons = nav.join('');
// HEADER TITLES
let headerContents = [
  "<a href='/'><p class='titleName'>Nate Folsom</p></a>",
  "<a href='/'><div class='UXp'<h2>UX</h2></div></a>",
  navButtons
];
// JOIN ALL HTML ARRAY
let headerHTML = headerContents.join('');

// ADD HEADER DIV TO DOCUMENT INSIDE HEADER
headerDiv.innerHTML = headerHTML;
let header = document.getElementById('myHeader');
header.appendChild(headerDiv);
//------------------------------------------------//
