// let menu = document.querySelector('#menu');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
// }

// let menu = document.querySelector('#menu');
// let navbar = document.querySelector('.navbar');
// let frontBox = document.querySelector('#Front');
// let miningBox = document.querySelector('#Mining');
// let cyberBox = document.querySelector('#Cyber');
// let iotBox = document.querySelector('#IOT');
// let mobileBox = document.querySelector('#Mobile');
// let testingBox = document.querySelector('#Testing');

// menu.onclick = () => {
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
// }

// Add click event listener for "Front End Development"
// let frontEndLink = document.querySelector('#frontEndLink');
// frontEndLink.onclick = () => {
//   // Show Front End Development box and hide others
//   frontBox.style.display = 'none';
//   miningBox.style.display = 'float';
//   cyberBox.style.display = 'none';
//   iotBox.style.display = 'none';
//   mobileBox.style.display = 'none';
//   testingBox.style.display = 'none';
// }



document.addEventListener("DOMContentLoaded", function() {
    // Your code here

    var frontEndLink = document.getElementById("frontEndLink");

    if (frontEndLink) {
        frontEndLink.addEventListener("click", myFunction);
    }

    function myFunction() {
        // Your code to modify the display property here
        document.getElementById("Front").style.display = "block";
        document.getElementById("Mining").style.display = "none";
        document.getElementById("Cyber").style.display = "none";
        document.getElementById("IOT").style.display = "none";
        document.getElementById("Mobile").style.display = "none";
        document.getElementById("Testing").style.display = "none";
    }
});






