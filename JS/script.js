const attestati = [

  //BTICINO

  {

    logo: '<img src="../IMMAGINI/BTicino_logo.svg.webp" alt="BTicino">',

    logoClass: "logo-bticino",

    titolo: "Attestati BTicino Academy",

    ente: "BTicino Spa",

    anno: "",

    link: "https://drive.google.com/drive/folders/1hQ5yE9THwLys8HN5pr5Zz4FlnqMWXEGR?usp=sharing"

  },

  //FINDER

  {

    logo: '<img src="../IMMAGINI/Finder_logo.svg.webp" alt="Finder">',

    logoClass: "logo-came",

    titolo: "Corsi Finder Spa",

    ente: "Finder Spa",

    anno: "",

    link: "https://drive.google.com/drive/folders/1ZuXPtnMCrw3zivWpHb0dgA2tb7-3P7pE?usp=drive_link"

  },

  //CAME

  {

    logo: '<img src="../IMMAGINI/CAME_logo.png" alt="CAME">',

    logoClass: "logo-came",

    titolo: "Attestati CAME Training Lab",

    ente: "CAME Spa",

    anno: "",

    link: "https://drive.google.com/drive/folders/1HNlip0_u8KDZmWd9K9F8iywWolcAopwB?usp=sharing"

  },

  //COURSERA

  {

    logo: '<img src="../IMMAGINI/Coursera_logo.svg.webp" alt="Coursera">',

    logoClass: "logo-knx",

    titolo: "Attestati Coursera",

    ente: "Coursera Inc",

    anno: "",

    link: "https://drive.google.com/drive/folders/1sEyKQue-SLWI-lPFo13cZSMWB2ZF8N3T?usp=sharing"

  },

//GOOGLE

  {

    logo: '<img src="../IMMAGINI/Google_logo.svg.webp" alt="Google">',

    logoClass: "logo-google",

    titolo: "Funzionalità premium avanzate per amministratori IT",

    ente: "Google",

    anno: "2025",

    link: "https://drive.google.com/"

  },



  {

    logo: '<img src="../IMMAGINI/Google_logo.svg.webp" alt="Goolge">',

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

  },

//COMOLI E FERRARI

  {

    logo: '<img src="../IMMAGINI/ComolieFerrari_logo.png" alt="Comoli e Ferrari">',

    logoClass: "logo-knx",

    titolo: "Introduzione all'elaborazione PLC e segnali dal campo",

    ente: "Comoli e Ferrari Spa",

    anno: "2021",

    link: "https://drive.google.com/file/d/1PiG1M5dHGCzTHRfReFy5d8ohwzhm9LMZ/view?usp=drive_link"

  },

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
