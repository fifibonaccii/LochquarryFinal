console.log("JavaScript file loaded");

/* Create an array to hold the quotes */
/* Arrays start at 0 */
const quotes = [
    "We had a great time and loved all the different activities that we did.",
    "The Scouts loved every second of it, especially the powerboating.",
    "I would definitely come back.",
    "Thank you to all the staff who worked so hard, in awful weather, to make sure that all the pupils had an amazing experience",
    "Five stars, it was great",
    "I was really scared about the abseiling but the instructor Mike was really encouraging and helped me do it, thanks Mike",
    "The archer was brillant, but not as good as axe throwing, I never thought we'd be allowed to do that! I got one of my axes in the middle of the target",
    "The kids had a ball and didn't want to leave"

];

/* Create an array to hold the citations */
/* Arrays start at 0 */
const cites = [
    "- 8th Gourock Guides",
    "- Martin Bainbridge, Scout Leader",
    "- Kelly, aged 9",
    "- Mrs Kahn, Hillend Primary School",
    "- Joe, aged 14",
    "- Sophie, aged 10",
    "- Scott, aged 13",
    "- Mr Evans, PE teacher"
];

/* create a constant called quoteElement that returns the position */
/* of the element with the ID of quote */
const quoteElement = document.getElementById("quote");

/* create a constant called citeElement that returns the position */
/* of the element with the ID of cite */    
const citeElement = document.getElementById("cite");

/* Create a variable called currentIndex with the value of 0 */
let currentIndex = 0;

/* Create a variable called interValid, this will be used with mouseover */
let intervalValid = null;

/* Create a function called changeQuote() */
function changeQuote(){
    /* Check to see if the quoteElement contains a value */
    /* if not skip */
    if(quoteElement && citeElement){
        /* Change the text with the quoteElement to the index value */
        /* of currentIndex */
        quoteElement.textContent=quotes[currentIndex];

        /* Change the text with the citeElement to the index value */
        /* of currentIndex */
        citeElement.textContent=cites[currentIndex];

        /* Set the new calue of currentIndex */
        currentIndex = (currentIndex + 1) % quotes.length;
    } else {
        console.error("Quote or citation element not found");
    }
}

/* Create a function called startInterval() */
function startInterval(){
    /* if the variable interValid is null */
    if(!intervalValid){
        /* Call the function setInterval() */
        /* So the every 6 seconds the changeQuote function will be called */        
        intervalValid = setInterval(changeQuote, 6000);
    }
}

/*Start the interval to change quotes */
startInterval();

/*Set the initial quote and citation */
changeQuote ();
showSlides();