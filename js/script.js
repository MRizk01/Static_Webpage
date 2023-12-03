// // let menu = document.querySelector('#menu');
// // let navbar = document.querySelector('.navbar');

// // menu.onclick = () =>{
// //   menu.classList.toggle('fa-times');
// //   navbar.classList.toggle('active');
// // }

// // window.onscroll = () =>{
// //   menu.classList.remove('fa-times');
// //   navbar.classList.remove('active');
// // }

// // let menu = document.querySelector('#menu');
// // let navbar = document.querySelector('.navbar');
// // let frontBox = document.querySelector('#Front');
// // let miningBox = document.querySelector('#Mining');
// // let cyberBox = document.querySelector('#Cyber');
// // let iotBox = document.querySelector('#IOT');
// // let mobileBox = document.querySelector('#Mobile');
// // let testingBox = document.querySelector('#Testing');

// // menu.onclick = () => {
// //   menu.classList.toggle('fa-times');
// //   navbar.classList.toggle('active');
// // }

// // window.onscroll = () => {
// //   menu.classList.remove('fa-times');
// //   navbar.classList.remove('active');
// // }

// // Add click event listener for "Front End Development"
// // let frontEndLink = document.querySelector('#frontEndLink');
// // frontEndLink.onclick = () => {
// //   // Show Front End Development box and hide others
// //   frontBox.style.display = 'none';
// //   miningBox.style.display = 'float';
// //   cyberBox.style.display = 'none';
// //   iotBox.style.display = 'none';
// //   mobileBox.style.display = 'none';
// //   testingBox.style.display = 'none';
// // }




// function myFunction() {
//     var frontElement = document.getElementById("Front");
//     var miningElement = document.getElementById("Mining");
//     var cyberElement = document.getElementById("Cyber");
//     var iotElement = document.getElementById("IOT");
//     var mobileElement = document.getElementById("Mobile");
//     var testingElement = document.getElementById("Testing");

//     if (frontElement && miningElement && cyberElement && iotElement && mobileElement && testingElement) {
//         frontElement.style.display = "block";
//         miningElement.style.display = "none";
//         cyberElement.style.display = "none";
//         iotElement.style.display = "none";
//         mobileElement.style.display = "none";
//         testingElement.style.display = "none";
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     var frontEndLink = document.getElementById("frontEndLink");

//     if (frontEndLink) {
//         frontEndLink.addEventListener("click", function(event) {
//             // Prevent the default behavior of the link
//             event.preventDefault();

//             // Set a flag in local storage indicating that the link was clicked
//             localStorage.setItem("frontEndLinkClicked", "true");

//             // Call the custom function
//             myFunction();
//         });
//     }

//     // Check if the flag is set
//     var isFrontEndLinkClicked = localStorage.getItem("frontEndLinkClicked");
//     if (isFrontEndLinkClicked === "true") {
//         // If the flag is set, modify the elements
//         myFunction();

//         // Clear the flag to prevent modifying elements on subsequent page loads
//         localStorage.removeItem("frontEndLinkClicked");
//     }
// });


// // script.js - Main JavaScript file

// // Function to check if an element with a specific ID exists
// function elementExists(id) {
//     return document.getElementById(id) !== null;
// }

// // Main script
// document.addEventListener('DOMContentLoaded', function () {
//     // Check if the body has a specific ID
//     if (elementExists('courses-page')) {
//         // Code specific to the courses page
//         console.log('This is the courses page!');
//         // Add more page-specific code as needed
//     } else if (elementExists('teacher-page')) {
//         // Code specific to the teacher page
//         console.log('This is the teacher page!');
//         // Add more page-specific code as needed
//     }

//     // Common code that runs on all pages
//     console.log('Common code for all pages');
// });

// script.js - Main JavaScript file

document.addEventListener('DOMContentLoaded', function () {
    // Select the login form element
    const loginForm = document.querySelector('.login form');

    // Check if the login form element exists
    if (loginForm) {
        // Add a submit event listener to the login form
        loginForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Show a simple alert when the form is submitted
            alert('Logged in successfully ');
        });
    }

    // Select the navbar element
    const navbar = document.querySelector('.navbar');

    // Check if the navbar element exists
    if (navbar) {
        // Add a mouseover event listener to change color on hover
        navbar.addEventListener('mouseover', function () {
            // Create a style element
            const style = document.createElement('style');

            // Define the CSS rule to change color on hover
            const cssRule = '.navbar a:hover { color: var(--pink) !important; }';

            // Append the CSS rule to the style element
            style.appendChild(document.createTextNode(cssRule));

            // Append the style element to the document head
            document.head.appendChild(style);
        });

        // Add a mouseout event listener to remove the added style on mouseout
        navbar.addEventListener('mouseout', function () {
            // Select the style element
            const addedStyle = document.querySelector('.added-style');

            // Remove the added style if it exists
            if (addedStyle) {
                addedStyle.remove();
            }
        });
    }
});
