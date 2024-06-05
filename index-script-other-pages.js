document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for changing navbar design on scroll
        const navbar = document.querySelector('.navbar-wrapper');
        const navbar_logo = document.getElementById('navbar-logo-image');
        const navbar_text = document.querySelectorAll('.nav-item a');
        const newImageURL = './images/logo_black.png'; // Change to the desired image URL
        const nav_button = document.querySelectorAll('.navbar-content button');
        const nav_button_text = document.querySelectorAll('.navbar-content button a');
    
    
    

    
    
    });
        
    document.addEventListener("DOMContentLoaded", function() {
        var hamburger = document.getElementById("navbar-hamburger");
    
        hamburger.addEventListener("click", function() {
            toggleMenu();  // Call the toggleMenu function when the hamburger is clicked
        });
    });
    
    function toggleMenu() {
        var menu = document.getElementById("top-nav-bar");
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }
    