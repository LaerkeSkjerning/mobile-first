

/* DENNE SIDE INDEHOLDER JS UDEN KOMMENTARER */

/* DENNE SIDE SKAL SLETTES, INDEN VI AFLEVERER PROJEKTET */

/* INDEX.HTML LINKER TIL script.js, DER ER FUNKTIONALITETEN FOR SIDEN */

document.addEventListener("DOMContentLoaded", function() {
    const inner = document.querySelector(".indre-karrusel"); 
    const pages = document.querySelectorAll(".karrusel-side"); 
    const colors = ["var(--primaer-lyseroed)", "var(--primaer-gul)", "var(--primaer-lyseroed)"]; 
    let currentIndex = 0; 
    let direction = 1; 

    function showNextPage() { 
        currentIndex += direction; 
        if (currentIndex === pages.length - 1) { 
            direction = -1; 
        } else if (currentIndex === 0) { 
            direction = 1; 
        }
        translatePages(); 
    }

    function translatePages() {
        const offset = -currentIndex * 100; 
        inner.style.transform = `translateX(${offset}%)`;
        changeBackgroundColor(); 
    }

    function changeBackgroundColor() {
        document.body.style.transition = "background-color 0.5s ease"; 
        document.body.style.backgroundColor = colors[currentIndex]; 
    }

    setInterval(showNextPage, 3000);
});
