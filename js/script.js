document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('.signup form');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Created account successfully ');
        });
    }

 
    const reviewsContainer = document.querySelector('.reviews-container');
    if (reviewsContainer) {
        reviewsContainer.style.maxHeight = '500px'; 
        reviewsContainer.style.display = 'flex';
        reviewsContainer.style.overflowX = 'auto';
    }
});

function changeNavbarColorOnHover() {
    const style = document.createElement('style');

    const cssRule = '.navbar a:hover { color: var(--pink) !important; }';

    style.appendChild(document.createTextNode(cssRule));

    document.head.appendChild(style);
}


function showSignUp(event) {
    var loginForm = document.querySelector('.login');
    var signupForm = document.querySelector('.signup');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

        header.style.display = 'none';
        footer.style.display = 'none';
        loginForm.style.display = 'none';
        header.style.display = 'none';
        footer.style.display = 'none';
        signupForm.style.display = 'block';    
    event.preventDefault();
}

function showLogin(event) {
    var loginForm = document.querySelector('.login');
    var signupForm = document.querySelector('.signup');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    header.style.display = 'block';
    footer.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';    
    event.preventDefault();
}

