/* IF-STATEMENT TAGER UDGANGSPUNKT I DEN STØRRELSE, FANEN ÅBNES I OG IKKE HVORDAN FANEN ÆNDRER SIG UNDERVEJS. */
/* ÅBNES SIDEN MED EN BREDDE PÅ 1024PX VIL DER VISES EN KARRUSEL OG DENNE KØRER STADIG SELVOM VINDUET GØRES STØRRE END 1024PX */
/* ÅBNES SIDEN MED EN BREDDE, DER ER STØRRE END 1024PX KØRER KARRUSELLEN IKKE - AL JS VIL VÆRE DEAKTIVERET INDTIL FANEN ÅBNES IGEN */

if (window.innerWidth < 1025){
    document.addEventListener("DOMContentLoaded", function() { /* listener, der venter paa at al HTML-indholdet er loaded foer funktionen starter */
        const inner = document.querySelector(".indre-karrusel"); /* querySelector henter det foerste element, der har klassen 'indre-karrusel' */
        const pages = document.querySelectorAll(".karrusel-side"); /* querySelectorAll henter alle elementer med klassen 'karrusel-side' (og gemmer dem i en NodeList) */
        const colors = ["var(--primaer-lyseroed)", "var(--primaer-gul)", "var(--primaer-lyseroed)"]; // Listen over baggrundsfarver
        let currentIndex = 0; /* currentIndex skal aendre værdi og derfor kan variablen ikke vaere en const */
        let direction = 1; /* direction skal aendre vaerdi og derfor kan variblen ikke vaere en const */

        function showNextPage() { /* Funktion, der skal vise den naeste side */
            currentIndex += direction; /* Laegger vaerdien af direction til vaerdien for currentIndex (0 += 1) */
            if (currentIndex === pages.length - 1) { /* If-statement, der siger, at saa laenge currentIndex ER PRÆCIST LIG MED pages.length (pages er vores konstant, der er sat til karrusel-side) MINUS 1 (fordi vi altid starter i 0) sker foelgende */
                direction = -1; /* directions vaerdi saettes til -1 */
            } else if (currentIndex === 0) { /* hvis ovenstaaende IKKE sker og currentIndex er PRAECIS LIG MED 0 sker foelgende */
                direction = 1; /* directions vaerdi saettes til 1 */
            }
            translatePages(); /* Naar if/else-statementet er faerdigt koeres denne metode, der er angivet under */
        }

        /* Denne funktion flytter karruselens indhold til den aktuelle side */
        function translatePages() {
            const offset = -currentIndex * 100; /* En konstant offset faar en negativ vaerdi for at flytte indholdet til venstre. Vi ganger med 100 for at give indholdet en bestemt stoerrelse og paa den maade bestemme, hvor meget siden skal flytte sig for at skifte helt. Da hver side skal fylde 100% forskyder ved ogsaa med 100%*/
            inner.style.transform = `translateX(${offset}%)`; /* Dette anvender det beregnede offset paa .indre-karrusel for at flytte siderne og lave karruselbevaegelsen. translateX tager et argument, der angiver den vandrette forskydning i % */
            changeBackgroundColor(); // Opdater baggrundsfarven - se nedstaaende
        }

        function changeBackgroundColor() {
            document.body.style.transition = "background-color 0.5s ease"; // Tilfoej overgangseffekt til baggrundsfarveskift
            document.body.style.backgroundColor = colors[currentIndex]; // Opdater baggrundsfarven baseret paa currentIndex
        }

        setInterval(showNextPage, 3000); /* Farven skifter hvert tredje sekunde (hvert 3000 millisekund) */

    });

}
