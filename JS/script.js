const attestati = [
  {logo:"CAME",logoClass:"logo-came",titolo:"ANTINTRUSIONE: PROGRAMMAZIONE AVANZATA",ente:"CAME",anno:"2023"},
  {logo:"BTICINO",logoClass:"logo-bticino",titolo:"ACS01: SISTEMA DI CONTROLLO ACCESSI",ente:"CAME",anno:"2023"},
  {logo:"CAME",logoClass:"logo-came",titolo:"AGT: GAMMA DERIVATI VIDEOCITOFONICI",ente:"CAME",anno:"2023"},
  {logo:"CAME",logoClass:"logo-came",titolo:"ATI: COMMERCIAL TUTORIAL",ente:"CAME",anno:"2023"},
  {logo:"Google",logoClass:"logo-google",titolo:"Funzionalità premium avanzate per amministratori IT",ente:"Google",anno:"2025"},
  {logo:"Google",logoClass:"logo-google",titolo:"Fundamentals of digital marketing",ente:"Google",anno:"2024"},
  {logo:"KNX",logoClass:"logo-knx",titolo:"eTS eCAMPUS",ente:"eCampus",anno:"2023"}
  //{logo:"ACHIEVEMENT DELL TRAINING",logoClass:"logo-dei",titolo:"ACHIEVEMENT DELL TRAINING",ente:"DEI",anno:"2021"},
  //{logo:"SIEMENS",logoClass:"logo-siemens",titolo:"CERTIFICAZIONE SIEMENS",ente:"Siemens",anno:"2021"}
];

const certificates = document.getElementById("certificates");
if (certificates) {
  attestati.forEach(a => {
    const card = document.createElement("article");
    card.className = "certificate-card";
    card.innerHTML = `
      <div>
        <div class="certificate-logo ${a.logoClass}">${a.logo}</div>
        <h3>${a.titolo}</h3>
        <div class="issuer">${a.ente}</div>
        <div class="year">${a.anno}</div>
      </div>
      <a href="#" class="view" onclick="return false;">Visualizza <span>→</span></a>`;
    certificates.appendChild(card);
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
      "Messaggio pronto per l'invio.";
    contactForm.reset();
  });
}
