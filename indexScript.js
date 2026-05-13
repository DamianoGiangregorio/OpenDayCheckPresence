import { CalcolaCodice } from "./CommonScript.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hero-form");
  form.addEventListener("submit", SendData);
});

async function SendData(event) {
  event.preventDefault();

  const nome = document.getElementById("hero-nome").value.trim().toLowerCase();
  const cognome = document.getElementById("hero-cognome").value.trim().toLowerCase();
  const classe = document.getElementById("hero-classe").value.trim().toLowerCase();
  const codiceInseritoRaw = document.getElementById("hero-codice").value;

  // Normalizzo codice inserito: minuscolo e trim
  const codiceInserito = codiceInseritoRaw.trim().toLowerCase();

  // Data oggi in formato d/m/yyyy (senza leading zero)
  const oggi = new Date();
  const giorno = oggi.getDate().toString();
  let mese = (oggi.getMonth() + 1);
  if(mese < 10){
    mese = "0"+ mese.toString();
  }
  const anno = oggi.getFullYear().toString();
  const dataOggi = anno + "/" + mese + "/" + giorno;

  try {
    const response = await fetch(`./api/getStudente.php?nome=${nome}&cognome=${cognome}&classe=${classe}&data=${dataOggi}`);
    let studenteTrovato = await response.json();

    if (studenteTrovato === null) {
      alert("Nessun record trovato con i dati forniti per la data di oggi.\nProva a verificare che i dati siano scritti correttamente");
      return;
    }
    
    let codiceCalcolato = CalcolaCodice(studenteTrovato);

    // Normalizzo codice calcolato per confronto (minuscolo e trim)
    codiceCalcolato = codiceCalcolato.trim().toLowerCase();
    if (codiceCalcolato === codiceInserito) {
      const response = await fetch(`./api/setPresenzaStudente.php?nome=${nome}&cognome=${cognome}&classe=${classe}&data=${dataOggi}`);
      const risposta = await response.json();
      if(risposta === true)
        alert("Presenza verificata con successo!");
      else 
        alert("Errore nella verifica. Riprova.");
    } else { 
      alert("Codice di verifica errato. Controlla e riprova.");
    }
  } catch (error) {
    alert("Errore nel controllo dati. Riprova più tardi.");
    console.log(error);
  }
}