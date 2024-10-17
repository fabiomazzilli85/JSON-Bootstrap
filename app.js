const dipendenti = [
  { "nome": "Mario", "cognome": "Rossi", "età": 30, "professione": "Ingegnere" },
  { "nome": "Luca", "cognome": "Bianchi", "età": 25, "professione": "Medico" },
  { "nome": "Giulia", "cognome": "Verdi", "età": 28, "professione": "Avvocato" },
  { "nome": "Anna", "cognome": "Neri", "età": 32, "professione": "Insegnante" },
  { "nome": "Federico", "cognome": "Gialli", "età": 27, "professione": "Architetto" },
  { "nome": "Sara", "cognome": "Rossi", "età": 29, "professione": "Designer" },
  { "nome": "Giovanni", "cognome": "Blu", "età": 35, "professione": "Chef" },
  { "nome": "Elena", "cognome": "Arancioni", "età": 26, "professione": "Fotografa" },
  { "nome": "Marta", "cognome": "Grigi", "età": 31, "professione": "Scrittrice" },
  { "nome": "Paolo", "cognome": "Viola", "età": 33, "professione": "Programmatore" },
  { "nome": "Gianni", "cognome": "Azzurri", "età": 23, "professione": "Copywriter" },
  { "nome": "Silvio", "cognome": "Beisoldoni", "età": 87, "professione": "CEO" }
];

function createCard(dipendente) {
  return `
    <div class="col-md-4">
      <div class="card mb-4 my-bg">
        <div class="card-body">
          <h5 class="text-center mb-3">${dipendente.nome} ${dipendente.cognome}</h5>
          <p class="card-text">Età: ${dipendente.età}</p>
          <p class="card-text">Professione: ${dipendente.professione}</p>
        </div>
      </div>
    </div>
  `;
}

async function fetchDipendenti() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dipendenti);
    }, 5000); // Sono millicondi, quindi 5 secondi.
  });
}

async function displayDipendenti() {
  const dipendenti = await fetchDipendenti();
  const container = document.getElementById('card-container');
  dipendenti.forEach(dipendente => {
    container.innerHTML += createCard(dipendente);
  });
}

displayDipendenti();
