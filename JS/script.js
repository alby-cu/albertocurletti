/* =========================================================
   ATTESTATI
========================================================= */

const attestati = [

    {
        logo: '<img src="../../IMMAGINI/BTicino_logo.svg.webp" alt="BTicino">',
        logoClass: "certificate-logo",
        titolo: "Attestati BTicino Academy",
        ente: "BTicino Spa",
        anno: "",
        link: "https://drive.google.com/drive/folders/1hQ5yE9THwLys8HN5pr5Zz4FlnqMWXEGR?usp=sharing"
    },

    {
        logo: '<img src="../../IMMAGINI/Finder_logo.svg.webp" alt="Finder">',
        logoClass: "certificate-logo",
        titolo: "Corsi Finder Spa",
        ente: "Finder Spa",
        anno: "",
        link: "https://drive.google.com/drive/folders/1ZuXPtnMCrw3zivWpHb0dgA2tb7-3P7pE?usp=drive_link"
    },

    {
        logo: '<img src="../../IMMAGINI/CAME_logo.png" alt="CAME">',
        logoClass: "certificate-logo",
        titolo: "Attestati CAME Training Lab",
        ente: "CAME Spa",
        anno: "",
        link: "https://drive.google.com/drive/folders/1HNlip0_u8KDZmWd9K9F8iywWolcAopwB?usp=sharing"
    },

    {
        logo: '<img src="../../IMMAGINI/Coursera_logo.svg.webp" alt="Coursera">',
        logoClass: "certificate-logo",
        titolo: "Attestati Coursera",
        ente: "Coursera Inc",
        anno: "",
        link: "https://drive.google.com/drive/folders/1sEyKQue-SLWI-lPFo13cZSMWB2ZF8N3T?usp=sharing"
    },

    {
        logo: '<img src="../../IMMAGINI/Google_logo.svg.webp" alt="Google">',
        logoClass: "certificate-logo",
        titolo: "Funzionalità premium avanzate per amministratori IT",
        ente: "Google",
        anno: "2025",
        link: "https://drive.google.com/file/d/1tnfFIHPZugcAoS-oBGvBZfN_GalHXWqe/view?usp=drive_link"
    },

    {
        logo: '<img src="../../IMMAGINI/Google_logo.svg.webp" alt="Google">',
        logoClass: "certificate-logo",
        titolo: "Fundamentals of digital marketing",
        ente: "Google",
        anno: "2024",
        link: "https://drive.google.com/file/d/1pjTqPAz180MdhTpqmhyb4gvfvIZ10Ez_/view?usp=sharing"
    },

    {
        logo: '<img src="../../IMMAGINI/KNX_logo.svg.webp" alt="KNX">',
        logoClass: "certificate-logo",
        titolo: "eTS eCAMPUS",
        ente: "eCampus",
        anno: "2023",
        link: "https://drive.google.com/file/d/1NaMBx2Hamvl1SsNiwlXhWnpiszPJl0uz/view"
    },

    {
        logo: '<img src="../../IMMAGINI/ComolieFerrari_logo.png" alt="Comoli e Ferrari">',
        logoClass: "certificate-logo",
        titolo: "Introduzione all'elaborazione PLC e segnali dal campo",
        ente: "Comoli e Ferrari Spa",
        anno: "2021",
        link: "https://drive.google.com/file/d/1PiG1M5dHGCzTHRfReFy5d8ohwzhm9LMZ/view?usp=drive_link"
    }

];



/* =========================================================
   RICONOSCIMENTO LINGUA
========================================================= */

const isEnglish = document.documentElement.lang === "en";



/* =========================================================
   ATTESTATI
========================================================= */

const certificates = document.getElementById("certificates");


if (certificates) {

    certificates.innerHTML = "";

    attestati.forEach(a => {

        const card = document.createElement("article");

        card.className = "certificate-card";


        const titolo = isEnglish
            ? translateCertificateTitle(a.titolo)
            : a.titolo;


        const ente = isEnglish
            ? translateIssuer(a.ente)
            : a.ente;


        const viewText = isEnglish
            ? "View"
            : "Visualizza";


        card.innerHTML = `

            <div>

                <div class="${a.logoClass}">
                    ${a.logo}
                </div>


                <h3>
                    ${titolo}
                </h3>


                <div class="issuer">
                    ${ente}
                </div>


                <div class="year">
                    ${a.anno}
                </div>

            </div>


            <a
                href="${a.link}"
                class="view"
                target="_blank"
                rel="noopener noreferrer"
            >

                ${viewText}

                <span>→</span>

            </a>

        `;


        certificates.appendChild(card);

    });

}



/* =========================================================
   TRADUZIONI ATTESTATI
========================================================= */

function translateCertificateTitle(title) {

    const translations = {

        "Attestati BTicino Academy":
            "BTicino Academy Certificates",

        "Corsi Finder Spa":
            "Finder Spa Courses",

        "Attestati CAME Training Lab":
            "CAME Training Lab Certificates",

        "Attestati Coursera":
            "Coursera Certificates",

        "Funzionalità premium avanzate per amministratori IT":
            "Advanced premium features for IT administrators",

        "Fundamentals of digital marketing":
            "Fundamentals of Digital Marketing",

        "eTS eCAMPUS":
            "eTS eCAMPUS",

        "Introduzione all'elaborazione PLC e segnali dal campo":
            "Introduction to PLC programming and field signals"

    };

    return translations[title] || title;
}



function translateIssuer(issuer) {

    const translations = {

        "BTicino Spa":
            "BTicino Spa",

        "Finder Spa":
            "Finder Spa",

        "CAME Spa":
            "CAME Spa",

        "Coursera Inc":
            "Coursera Inc",

        "Google":
            "Google",

        "eCampus":
            "eCampus",

        "Comoli e Ferrari Spa":
            "Comoli e Ferrari Spa"

    };

    return translations[issuer] || issuer;
}



/* =========================================================
   QR CODE
========================================================= */

const contactQR = document.getElementById("contactQR");


if (contactQR) {

    const qrData = `BEGIN:VCARD
VERSION:3.0
N:Curletti;Alberto;;;
FN:Alberto Curletti
TEL;TYPE=CELL:+393382601324
EMAIL;TYPE=INTERNET:curlettialberto@gmail.com
URL:https://albertocurletti.it
BDAY:20020511
NOTE:Alberto Curletti
END:VCARD`;


    const qrImage = document.createElement("img");

    qrImage.alt = "QR Code contatto Alberto Curletti";

    qrImage.width = 220;

    qrImage.height = 220;


    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="
        + encodeURIComponent(qrData);


    contactQR.appendChild(qrImage);

}



/* =========================================================
   VCF
========================================================= */

const downloadVcf = document.getElementById("downloadVcf");


if (downloadVcf) {

    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Curletti;Alberto;;;
FN:Alberto Curletti
TEL;TYPE=CELL:+393382601324
EMAIL;TYPE=INTERNET:curlettialberto@gmail.com
URL:https://albertocurletti.it
BDAY:20020511
NOTE:Alberto Curletti
END:VCARD`;


    const blob = new Blob(
        [vcard],
        {
            type: "text/vcard;charset=utf-8"
        }
    );


    const url = URL.createObjectURL(blob);


    downloadVcf.href = url;

    downloadVcf.download = "Alberto-Curletti.vcf";

}



/* =========================================================
   ANNO FOOTER
========================================================= */

document.querySelectorAll("footer span").forEach(element => {

    element.innerHTML = isEnglish
        ? "© 2026 Alberto Curletti. All rights reserved."
        : "© 2026 Alberto Curletti. Tutti i diritti riservati.";

});
