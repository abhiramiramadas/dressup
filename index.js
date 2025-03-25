document.addEventListener("DOMContentLoaded", function () {
    // Get references to the character outfit elements
    const shirt = document.getElementById("selected-shirt");
    const pants = document.getElementById("selected-pant");
    const hat = document.getElementById("selected-hat");

    // Outfit options
    const outfits = {
        shirts: ["shirt1.png", "shirt2.png", "shirt3.png"],
        pants: ["pant1.png", "pant2.png", "pant3.png"],
        hats: ["hat.png", "bow.png", "bow2.png"]
    };

    // Assign button event listeners for shirts
    document.getElementById("shirt1").addEventListener("click", function () {
        changeOutfit(shirt, outfits.shirts[0]);
    });

    document.getElementById("shirt2").addEventListener("click", function () {
        changeOutfit(shirt, outfits.shirts[1]);
    });

    document.getElementById("shirt3").addEventListener("click", function () {
        changeOutfit(shirt, outfits.shirts[2]);
    });

    // Assign button event listeners for pants
    document.getElementById("pant1").addEventListener("click", function () {
        changeOutfit(pants, outfits.pants[0]);
    });

    document.getElementById("pant2").addEventListener("click", function () {
        changeOutfit(pants, outfits.pants[1]);
    });

    document.getElementById("pant3").addEventListener("click", function () {
        changeOutfit(pants, outfits.pants[2]);
    });

    // Assign button event listeners for hats
    document.getElementById("bow1").addEventListener("click", function () {
        changeOutfit(hat, outfits.hats[1]);
    });

    document.getElementById("bow2").addEventListener("click", function () {
        changeOutfit(hat, outfits.hats[2]);
    });

    document.getElementById("hat").addEventListener("click", function () {
        changeOutfit(hat, outfits.hats[0]);
    });

    // Function to update outfit
    function changeOutfit(element, newSrc) {
        element.src = `assets/${newSrc}`;
    }
});
