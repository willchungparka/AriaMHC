document.addEventListener('DOMContentLoaded', function () {
// JavaScript for changing navbar design on scroll
    const navbar = document.querySelector('.navbar-wrapper');
    const navbar_logo = document.getElementById('navbar-logo-image');
    const navbar_text = document.querySelectorAll('.nav-item a');
    const newImageURL = './images/logo_black.png'; // Change to the desired image URL
    const nav_button = document.querySelectorAll('.navbar-content button');
    const nav_button_text = document.querySelectorAll('.navbar-content button a');



    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            navbar.style.backgroundColor = '#68B0AA'; // Change the background color
            navbar_text.forEach((item)=>{
                item.style.color = "#000"; // Change to your desired text color
            });
            navbar_logo.style.color = "#000"
            navbar_logo.src = newImageURL;
            nav_button.forEach((item)=>{
                item.style.backgroundColor = "#000"; // Change to your desired text color
                item.style.border = "0"; // Change to your desired text color
            });

            nav_button_text.forEach((item)=>{
                item.style.color = "#fff"; // Change to your desired text color

            });


            // Add other style changes as needed
        } else {
            navbar.style.backgroundColor = 'transparent'; // Revert to the initial background color
            // Revert other styles as needed
            navbar_text.forEach((item)=>{
                item.style.color = "#fff"; // Change to your desired text color
            });
            navbar_logo.style.color = "#fff"
            navbar_logo.src = "./images/logo.png";
            nav_button.forEach((item)=>{
                item.style.backgroundColor = "#fff"; // Change to your desired text color
                item.style.border = "0"; // Change to your desired text color
            });

            nav_button_text.forEach((item)=>{
                item.style.color = "#000"; // Change to your desired text color

            });



        }
    });


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
