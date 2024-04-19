


document.addEventListener("DOMContentLoaded", function() { /* listener, der venter på at al HTML-indholdet er loaded før funktionen kører */
    const inner = document.querySelector(".indre-karrusel"); /* querySelector henter det første element, der har klassen 'indre-karrusel' */
    const pages = document.querySelectorAll(".karrusel-side"); /* querySelectorAll henter alle elementer med klassen 'karrusel-side' */
    const colors = ["var(--primaer-lyseroed)", "var(--primaer-gul)", "var(--primaer-lyseroed)"]; // Listen over baggrundsfarver
    let currentIndex = 0; /* currentIndex skal ændre værdi og derfor kan variablen ikke være en const */
    let direction = 1; /* direction skal ændre værdi og derfor kan variblen ikke være en const */

    function showNextPage() { /* Funktion, der skal vise den næste side */
        currentIndex += direction; /* Lægger værdien af direction til værdien for currentIndex (0 += 1) */
        if (currentIndex === pages.length - 1) { /* If-statement, der siger, at så længe currentIndex ER PRÆCIST LIG MED pages.length (pages er vores konstant, der er sat til karrusel-side) MINUS 1 (fordi vi altid starter i 0) sker følgende */
            direction = -1; /* directions værdi sættes til -1 */
        } else if (currentIndex === 0) { /* hvis ovenstående IKKE sker og currentIndex er PRÆCIS LIG MED 0 sker følgende */
            direction = 1; /* directions værdi sættes til 1 */
        }
        translatePages(); /* Når if/else-statementet er færdigt køres denne metode, der er angivet under */
    }

    function translatePages() {
        const offset = -currentIndex * 100; /* En konstant offset får en negativ værdi for at flytte indholdet til venstre. Vi ganger med 100 for at give indholdet en bestemt størrelse og på den måde bestemme, hvor meget siden skal flytte sig for at skifte helt. Da hver side skal fylde 100% forskyder ved også med 100%*/
        inner.style.transform = `translateX(${offset}%)`;
        changeBackgroundColor(); // Opdater baggrundsfarven
    }

    function changeBackgroundColor() {
        document.body.style.transition = "background-color 0.5s ease"; // Tilføj overgangseffekt til baggrundsfarveskift
        document.body.style.backgroundColor = colors[currentIndex]; // Opdater baggrundsfarven baseret på currentIndex
    }

    setInterval(showNextPage, 3000);
});





        /* ChatGPT - forklaring af ovenstående
            Offsettet i denne sammenhæng refererer til den horisontale forskydning af karusellen i procentenheder. Når vi anvender translateX() på carousel-inner-elementet, flytter vi indholdet vandret i forhold til dets nuværende position.

            Her er en kort forklaring på, hvordan det virker:

            translateX()-funktionen tager et argument, der angiver den horisontale forskydning i pixels eller procentenheder.

            I vores tilfælde er offset negativt, fordi vi ønsker at flytte indholdet til venstre for at afsløre den næste side i karusellen.

            Vi ganger -currentIndex med 100 for at konvertere currentIndex til en procentdel af bredden på hvert element. Dette vil bestemme, hvor meget vi skal flytte karusellen.

            Hver side i karusellen fylder 100% af karusellens bredde, så en forskydning på 100% vil flytte karusellen til siden af det næste element.

            Ved at multiplicere currentIndex med -100 får vi den nødvendige negative procentdel for at flytte karusellen til den ønskede side.
        */

        /*
            document.addEventListener("DOMContentLoaded", function() { ... });: Dette er en event-lytter, der venter på, at DOM'en er fuldt indlæst, før den udfører koden inde i funktionen.

            const pages = document.querySelectorAll(".karrusel-side");: Dette vælger alle elementer med klassen "karrusel-side" og gemmer dem i en variabel.

            const colors = ["var(--primaer-gul)", "var(--primaer-lyseroed)", "var(--primaer-gul)"];: Dette definerer en liste over baggrundsfarver, der skal skiftes mellem.

            function showNextPage() { ... }: Dette er en funktion, der skifter til næste side i karrusellen og opdaterer baggrundsfarven.

            function translatePages() { ... }: Denne funktion flytter karruselens indhold til den aktuelle side.

            function changeBackgroundColor() { ... }: Denne funktion opdaterer baggrundsfarven til den aktuelle side.

            setInterval(showNextPage, 3000);: Dette starter intervallet, der kalder showNextPage()-funktionen hvert 3. sekund for at skifte siderne i karrusellen.
        */

        /*
            document.addEventListener("DOMContentLoaded", function() {: Dette er en event-lytter, der lytter efter, at DOM'en er blevet indlæst, før den udfører noget. Når DOMContentLoaded-eventet udløses, starter funktionen.

            const inner = document.querySelector(".indre-karrusel");: Dette vælger det første element i DOM'en med klassen ".indre-karrusel" og gemmer det i variablen inner. Denne variabel bruges senere til at manipulere indholdet af karrusellen.

            const pages = document.querySelectorAll(".karrusel-side");: Dette vælger alle elementer i DOM'en med klassen ".karrusel-side" og gemmer dem i en NodeList i variablen pages. NodeList'en indeholder alle siderne i karrusellen.

            const colors = ["var(--primaer-gul)", "var(--primaer-lyseroed)", "var(--primaer-gul)"];: Dette er en liste med baggrundsfarver, der bruges til at skifte baggrundsfarve på dokumentet. Farverne er defineret som CSS variabler og hentes senere baseret på currentIndex.

            let currentIndex = 0;: Dette er en variabel, der holder styr på det aktuelle indeks for den side, der vises i karrusellen. Den starter med at pege på den første side (indekseret som 0).

            let direction = 1;: Dette er en variabel, der holder styr på retningen for karrusellen. Den starter med værdien 1, hvilket betyder, at karrusellen bevæger sig fremad.

            function showNextPage() {: Dette definerer en funktion ved navn showNextPage, som kaldes for at skifte til den næste side i karrusellen.

            currentIndex += direction;: Dette opdaterer currentIndex ved at tilføje direction til det aktuelle indeks. Dette får karrusellen til at skifte til den næste side.

            if (currentIndex === pages.length - 1) { ... }: Dette er en betinget erklæring, der kontrollerer, om currentIndex er lig med det sidste indeks i karrusellen. Hvis det er tilfældet, ændres retningen, så karrusellen bevæger sig baglæns.

            else if (currentIndex === 0) { ... }: Dette tjekker, om currentIndex er lig med 0, hvilket betyder, at karrusellen er nået til den første side. Hvis det er tilfældet, ændres retningen, så karrusellen bevæger sig fremad igen.

            translatePages();: Dette kaldes for at opdatere visningen af siderne i karrusellen ved at anvende currentIndex.

            function translatePages() { ... }: Dette definerer en funktion, der opdaterer visningen af siderne i karrusellen baseret på currentIndex.

            const offset = -currentIndex * 100;: Dette beregner det nødvendige offset for at flytte siderne i karrusellen. Den beregner det som -currentIndex * 100, hvilket betyder, at forskydningen er 100% for hver side, og retningen bestemmes af currentIndex's værdi.

            inner.style.transform = translateX(${offset}%);: Dette anvender det beregnede offset på .indre-karrusel for at flytte siderne og simulere karruselbevægelsen.

            changeBackgroundColor();: Dette kaldes for at opdatere baggrundsfarven på dokumentet baseret på currentIndex.

            function changeBackgroundColor() { ... }: Dette definerer en funktion, der ændrer baggrundsfarven på dokumentet baseret på currentIndex.

            setInterval(showNextPage, 3000);: Dette opretter et interval, der kontinuerligt kalder showNextPage-funktionen hvert 3000 millisekunder (3 sekunder), hvilket skifter siderne i karrusellen automatisk.
        */