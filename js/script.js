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









