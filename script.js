document.addEventListener("DOMContentLoaded", function() {
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px"; // Move menu out of view
    }

    // Attach functions to the respective icons
    document.querySelector(".fa-bars").addEventListener("click", openmenu);
    document.querySelector(".fa-xmark").addEventListener("click", closemenu);
});

/*----------about me-----------*/
