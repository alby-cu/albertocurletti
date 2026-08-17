const attestati = [
  //CAME
  {
    logo: '<img src="../IMMAGINI/CAME_logo.png" alt="CAME">',
    logoClass: "logo-came",
    titolo: "TEST",
    ente: "CAME Spa",
    anno: "2023",
    link: "https://drive.google.com/"
  },
//BTICINO
  {
    logo: '<img src="../IMMAGINI/BTicino_logo.svg.webp" alt="BTicino">',
    logoClass: "logo-bticino",
    titolo: "TEST",
    ente: "BTicino Spa",
    anno: "2023",
    link: "https://drive.google.com/"
  },
//GOOGLE
  {
    logo: '<img src="../IMMAGINI/Goolge_logo.svg.webp" alt="KNX">',
    logoClass: "logo-google",
    titolo: "Funzionalità premium avanzate per amministratori IT",
    ente: "Google",
    anno: "2025",
    link: "https://drive.google.com/"
  },

  {
    logo: '<img src="../IMMAGINI/Goolge_logo.svg.webp" alt="KNX">',
    logoClass: "logo-google",
    titolo: "Fundamentals of digital marketing",
    ente: "Google",
    anno: "2024",
    link: "https://drive.google.com/"
  },
//KNX
  {
    logo: '<img src="../IMMAGINI/KNX_logo.svg.webp" alt="KNX">',
    logoClass: "logo-knx",
    titolo: "eTS eCAMPUS",
    ente: "eCampus",
    anno: "2023",
    link: "https://drive.google.com/file/d/1NaMBx2Hamvl1SsNiwlXhWnpiszPJl0uz/view"
  }

  /*
  {
    logo: "ACHIEVEMENT DELL TRAINING",
    logoClass: "logo-dei",
    titolo: "ACHIEVEMENT DELL TRAINING",
    ente: "DEI",
    anno: "2021",
    link: "https://drive.google.com/"
  },

  {
    logo: "SIEMENS",
    logoClass: "logo-siemens",
    titolo: "CERTIFICAZIONE SIEMENS",
    ente: "Siemens",
    anno: "2021",
    link: "https://drive.google.com/"
  }
  */
];


// ===============================
// ATTESTATI
// ===============================

const certificates = document.getElementById("certificates");

if (certificates) {

  attestati.forEach(a => {

    const card = document.createElement("article");

    card.className = "certificate-card";

    card.innerHTML = `
      <div>
        <div class="certificate-logo ${a.logoClass}">
          ${a.logo}
        </div>

        <h3>${a.titolo}</h3>

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


// ===============================
// FORM CONTATTI
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", e => {

    e.preventDefault();

    const formMessage = document.getElementById("formMessage");

    if (formMessage) {
      formMessage.textContent = "Messaggio pronto per l'invio.";
    }

    contactForm.reset();

  });

}
