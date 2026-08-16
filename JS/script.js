/* =====================================================
   ATTESTATI
===================================================== */

/*
    Inserisci qui i tuoi attestati.

    Per ogni attestato puoi modificare:

    titolo  = nome dell'attestato
    ente    = ente che lo ha rilasciato
    anno    = anno
    link    = pagina/PDF da aprire con VISUALIZZA
*/

const certificates = [

    {
        titolo: "Certificazione 1",
        ente: "Nome ente",
        anno: "2026",
        link: "#"
    },

    {
        titolo: "Certificazione 2",
        ente: "Nome ente",
        anno: "2026",
        link: "#"
    },

    {
        titolo: "Certificazione 3",
        ente: "Nome ente",
        anno: "2025",
        link: "#"
    }

];


/* =====================================================
   CREAZIONE ATTESTATI
===================================================== */

function createCertificate(certificate) {

    const card = document.createElement("article");

    card.className = "certificate-card";


    const title = document.createElement("h3");

    title.textContent = certificate.titolo;


    const organization = document.createElement("p");

    organization.textContent = certificate.ente;


    const year = document.createElement("span");

    year.className = "certificate-year";

    year.textContent = certificate.anno;


    const button = document.createElement("a");

    button.className = "certificate-button";

    button.textContent = "VISUALIZZA";

    button.href = certificate.link;

    button.target = "_blank";

    button.rel = "noopener noreferrer";


    card.appendChild(title);

    card.appendChild(organization);

    card.appendChild(year);

    card.appendChild(button);


    return card;
}


/* =====================================================
   VISUALIZZAZIONE ATTESTATI
===================================================== */

function renderCertificates() {

    const container =
        document.getElementById("certificates");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    certificates.forEach(function(certificate) {

        const card =
            createCertificate(certificate);

        container.appendChild(card);

    });

}


/* =====================================================
   AVVIO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderCertificates();

    }
);