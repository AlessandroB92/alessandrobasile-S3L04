const tabellone = document.getElementById("tombolaBoard");
const numeriEstratti = new Set();
const numeriEstrattiDiv = document.getElementById("numeriEstratti");

// Creazione del tabellone
let rigaCorrente;
for (let i = 1; i <= 76; i++) {
  if (i % 10 === 1) {
    rigaCorrente = document.createElement("tr");
    tabellone.appendChild(rigaCorrente);
  }

  const cella = document.createElement("td");
  cella.textContent = i;
  rigaCorrente.appendChild(cella);
}

function estraiNumero() {
  if (numeriEstratti.size === 76) {
    alert("Hai estratto tutti i numeri!");
    return;
  }

  let numeroCasuale;
  do {
    numeroCasuale = generaNumeroCasuale(1, 76);
  } while (numeriEstratti.has(numeroCasuale));

  // Evidenzia la cella corrispondente al numero estratto
  const cellaCorrispondente =
    document.getElementsByTagName("td")[numeroCasuale - 1];
  cellaCorrispondente.style.backgroundColor = "#FFD700";

  // Aggiungi il numero estratto all'insieme dei numeri estratti
  numeriEstratti.add(numeroCasuale);

  // Aggiorna la lista dei numeri estratti
  aggiornaListaNumeriEstratti();
}

function aggiornaListaNumeriEstratti() {
  numeriEstrattiDiv.textContent = Array.from(numeriEstratti).join(", ");
}

function resettaTabellone() {
  const celle = document.getElementsByTagName("td");
  for (const cella of celle) {
    cella.style.backgroundColor = "#fff";
  }
}

function resettaNumeriEstratti() {
  numeriEstratti.clear();
  aggiornaListaNumeriEstratti();
  resettaTabellone();
}

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
