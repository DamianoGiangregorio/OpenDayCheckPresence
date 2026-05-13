export function CalcolaCodice(alunno) {

  function pulisci(valore) {
    return String(valore || "")
      .toLowerCase()
      .trim()
      .replace(/'/g, "")               // rimuove apostrofi
      .replace(/\s+/g, "")             // rimuove spazi
      .normalize("NFD")                // separa accenti
      .replace(/[\u0300-\u036f]/g, "");// rimuove accenti
  }

  const dataOpenDay = pulisci(alunno.OpenDayDate);
  const nome = pulisci(alunno.nome);
  const cognome = pulisci(alunno.cognome);
  const classe = pulisci(alunno.classe);

  const input = `${nome}|${cognome}|${classe}|${dataOpenDay}`;

  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash) + input.charCodeAt(i);
  }

  return (hash >>> 0).toString(16);
}