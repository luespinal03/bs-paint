/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 20;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-8';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
 ***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

let paletteColors = document.querySelectorAll('.palette .palette-color');

let brush = document.querySelector('.current-brush');

let canvasArea = document.querySelectorAll('.canvas div');

let app = document.querySelector('.app');
/*
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
*/




/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

// event listener to change brush color based on color selection
for (let i = 0; i < paletteColors.length; i++) {
  paletteColors[i].addEventListener('click', function () {
    console.log(paletteColors[i]);
    console.log(brush.classList);
    console.log(paletteColors.classList);
    // paletteColors represents the list of 5 colors we composed
    // parameter 1: current color to replace: brush.classList[1]
    // parameter 2: new color: paletterColors[i].classList[1];
    // palette is an array of 5 palette-color's
    // palette-color is an array of color-1, color-2, color-3, color-4, color-5
    // .replace(remove this parameter, and replace with this)
    brush.classList.replace(brush.classList[1], paletteColors[i].classList[1]);

    // remove and add
    // doing it without .remove()

    // brush.classList.remove(brush.classList[1]); 
    // brush.classList.add(paletteColors[i].classList[1]);
  })
}

brush.addEventListener('click', function () {
  console.log(brush);
});



/***************************** 
CANVAS AREA BASED ON COLOR CHOICE
******************************/

// for(let i = 0; i < canvasArea.length; i++){
//   canvasArea[i].addEventListener('click', function(){
//     console.log(canvasArea[i].classList);

//   canvasArea[i].classList.replace(canvasArea[i].classList[1], brush.classList[1]);
//   })
// }

for (let square of canvasArea) {
  // square.addEventListener('click', function () {
  //   console.log(square);
  //   square.classList.replace(square.classList[1], brush.classList[1]);
  // })



  /*
   *  IF THE MOUSE IS CLICKED (DOWN) AND HOVERING REPLACE THE SQUARES BEING HOVERED OVER BY THE COLOR THATS BEEN SELECTED
   */
  square.addEventListener('mouseover', function () {
    if (mouseDown === true) {
      square.classList.replace(square.classList[1], brush.classList[1]);
    }
  })
}
// document adds it to the entire page
// document.addEventListener('', function(){
//})
let mouseDown = false;

app.addEventListener('mousedown', function () {
  // console.log('mouse is down');
  mouseDown = true;
  // console.log(`mousedown: ${mouseDown}`);
});

app.addEventListener('mouseup', function () {
  // console.log('mouse is up');
  mouseDown = false;
  // console.log(`mousedown: ${mouseDown}`);
});

// mousedown - 	The event occurs when the user presses a mouse button over an element

// mouseup - The event occurs when a user releases a mouse button over an element

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.





/**************************
 * STRETCH GOALS SECTION *
 **************************/

let darkMode = document.querySelector('#darkMode');

let paintAway = document.querySelector('.message');

let headings = document.querySelector('.headings');

let resetButton = document.querySelector('#reset');

let white = document.querySelector('.palette-color color-8')

let iconPalette = document.querySelector('.palette-icon');



// DARK MODE 

darkMode.addEventListener('click', function () {
  console.log('darkMode button');

  if (app.style.backgroundColor !== 'black') {
    app.style.backgroundColor = 'black';
    headings.style.backgroundColor = 'rgb(62, 202, 109)';
    iconPalette.src = "https://cdn-icons-png.flaticon.com/512/1372/1372997.png"

  } else {
    app.style.backgroundColor = '';
    headings.style.backgroundColor = '';
    iconPalette.src = "palette.png"

  }
  // app.style.backgroundColor = 'black';
});



// RESET BUTTON

resetButton.addEventListener('click', function(){
  console.log('reset button');

  for(let i = 0; i < canvasArea.length; i++){
        console.log(canvasArea[i].classList);
    
      canvasArea[i].classList.replace(canvasArea[i].classList[1], paletteColors.classList[1]);

      } 
  
})

// iconPalette.addEventListener('click', function(){
//   console.log('icon palette clicked');
// })