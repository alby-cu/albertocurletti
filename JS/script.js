// =========================================================
// ATTESTATI
// =========================================================

const attestati = [

    // BTICINO
    {
        logo: '<img src="../IMMAGINI/BTicino_logo.svg.webp" alt="BTicino">',
        titolo: "Attestati BTicino Academy",
        ente: "BTicino Spa",
        anno: "",
        link: "https://drive.google.com/drive/folders/1hQ5yE9THwLys8HN5pr5Zz4FlnqMWXEGR?usp=sharing"
    },

    // FINDER
    {
        logo: '<img src="../IMMAGINI/Finder_logo.svg.webp" alt="Finder">',
        titolo: "Corsi Finder Spa",
        ente: "Finder Spa",
        anno: "",
        link: "https://drive.google.com/drive/folders/1ZuXPtnMCrw3zivWpHb0dgA2tb7-3P7pE?usp=drive_link"
    },

    // CAME
    {
        logo: '<img src="../IMMAGINI/CAME_logo.png" alt="CAME">',
        titolo: "Attestati CAME Training Lab",
        ente: "CAME Spa",
        anno: "",
        link: "https://drive.google.com/drive/folders/1HNlip0_u8KDZmWd9K9F8iywWolcAopwB?usp=sharing"
    },

    // COURSERA
    {
        logo: '<img src="../IMMAGINI/Coursera_logo.svg.webp" alt="Coursera">',
        titolo: "Attestati Coursera",
        ente: "Coursera Inc",
        anno: "",
        link: "https://drive.google.com/drive/folders/1sEyKQue-SLWI-lPFo13cZSMWB2ZF8N3T?usp=sharing"
    },

    // GOOGLE
    {
        logo: '<img src="../IMMAGINI/Google_logo.svg.webp" alt="Google">',
        titolo: "Funzionalità premium avanzate per amministratori IT",
        ente: "Google",
        anno: "2025",
        link: "https://drive.google.com/"
    },

    {
        logo: '<img src="../IMMAGINI/Google_logo.svg.webp" alt="Google">',
        titolo: "Fundamentals of digital marketing",
        ente: "Google",
        anno: "2024",
        link: "https://drive.google.com/"
    },

    // KNX
    {
        logo: '<img src="../IMMAGINI/KNX_logo.svg.webp" alt="KNX">',
        titolo: "eTS eCAMPUS",
        ente: "eCampus",
        anno: "2023",
        link: "https://drive.google.com/file/d/1NaMBx2Hamvl1SsNiwlXhWnpiszPJl0uz/view"
    },

    // COMOLI E FERRARI
    {
        logo: '<img src="../IMMAGINI/ComolieFerrari_logo.png" alt="Comoli e Ferrari">',
        titolo: "Introduzione all'elaborazione PLC e segnali dal campo",
        ente: "Comoli e Ferrari Spa",
        anno: "2021",
        link: "https://drive.google.com/file/d/1PiG1M5dHGCzTHRfReFy5d8ohwzhm9LMZ/view?usp=drive_link"
    }

];



// =========================================================
// GENERAZIONE ATTESTATI
// =========================================================

const certificates = document.getElementById("certificates");

if (certificates) {

    attestati.forEach(a => {

        const card = document.createElement("article");

        card.className = "certificate-card";

        card.innerHTML = `
            
            <div>

                <div class="certificate-logo">
                    ${a.logo}
                </div>

                <h3>
                    ${a.titolo}
                </h3>

                <div class="issuer">
                    ${a.ente}
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
                Visualizza <span>→</span>
            </a>

        `;

        certificates.appendChild(card);

    });

}



// =========================================================
// BIGLIETTO DA VISITA / QR CODE
// =========================================================

const contactQr = document.getElementById("contactQr");

if (contactQr) {


    // =====================================================
    // DATI CONTATTO
    // =====================================================

    const nome = "Alberto Curletti";

    const telefono = "+39 3382601324";

    const email = "curlettialberto@gmail.com";

    const localita = "Carmagnola, Piemonte, Italia";

    const linkedin =
        "https://it.linkedin.com/in/curlettialberto";


    // =====================================================
    // PROFILO X
    // =====================================================
    // Da inserire quando creerai il profilo.
    //
    // Esempio:
    // const x = "https://x.com/tuousername";
    //
    // Per ora non viene inserito nella vCard.
    // =====================================================


    // =====================================================
    // CREAZIONE VCARD
    // =====================================================

    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Curletti;Alberto;;;",
        "FN:Alberto Curletti",
        `TEL;TYPE=CELL:${telefono}`,
        `EMAIL;TYPE=INTERNET:${email}`,
        `ADR;TYPE=HOME:;;${localita};;;;`,
        `URL:${linkedin}`,
        "END:VCARD"
    ].join("\r\n");


    // =====================================================
    // GENERAZIONE QR CODE
    // =====================================================

    if (typeof QRCode !== "undefined") {

        new QRCode(contactQr, {

            text: vCard,

            width: 220,

            height: 220,

            correctLevel: QRCode.CorrectLevel.H

        });

    } else {

        contactQr.innerHTML = `
            <p>
                Impossibile caricare il QR Code.
            </p>
        `;

    }


    // =====================================================
    // DOWNLOAD VCARD
    // =====================================================

    const downloadVcard =
        document.getElementById("downloadVcard");


    if (downloadVcard) {

        downloadVcard.addEventListener("click", function (e) {

            e.preventDefault();


            const blob = new Blob(
                [vCard],
                {
                    type: "text/vcard;charset=utf-8"
                }
            );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");


            link.href = url;

            link.download =
                "Alberto_Curletti.vcf";


            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);


            URL.revokeObjectURL(url);

        });

    }

}
