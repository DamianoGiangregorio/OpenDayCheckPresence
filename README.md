# OpenDayCheckPresence

Sistema di gestione delle presenze per eventi Open Day, progettato per registrare e monitorare la partecipazione degli studenti in modo semplice, veloce e strutturato.

---

## 📌 Descrizione del progetto

OpenDayCheckPresence è un’applicazione pensata per la gestione delle presenze durante eventi scolastici come Open Day.

Il sistema permette di:
- registrare studenti partecipanti
- tracciare le presenze agli eventi
- gestire informazioni relative a classi e utenti
- semplificare il controllo e l’organizzazione delle attività

Il progetto è stato sviluppato con l’obiettivo di simulare un sistema reale di gestione presenze utilizzabile in ambito scolastico o organizzativo.

---

## 🧱 Architettura del sistema

Il progetto segue una struttura logica di tipo gestionale:

- **Frontend**: interfaccia utente per l’inserimento e la visualizzazione dei dati
- **Backend**: gestione della logica applicativa e delle operazioni
- **Database**: memorizzazione persistente di studenti, eventi e presenze

La comunicazione tra le componenti avviene tramite richieste tra frontend e backend oppure tramite accesso diretto al database (in base all’implementazione).

---

## 🛠️ Tecnologie utilizzate

- Linguaggio di programmazione principale (es. Java / C# / JavaScript)
- Database relazionale (es. MySQL / SQLite)
- HTML, CSS, JavaScript (se presente interfaccia web)
- Struttura a moduli per la gestione di entità e operazioni

---

## 📂 Struttura del progetto


/OpenDayCheckPresence
│
├── backend/ # Logica applicativa
├── frontend/ # Interfaccia utente (se presente)
├── database/ # Script SQL e configurazione DB
├── models/ # Entità (Studenti, Eventi, Presenze)
├── controllers/ # Gestione operazioni e logica
└── README.md # Documentazione del progetto


---

## 🚀 Funzionalità principali

### 👤 Gestione studenti
- Inserimento nuovi studenti
- Visualizzazione elenco studenti
- Associazione con classe

### 📅 Gestione Open Day
- Creazione e gestione eventi
- Visualizzazione eventi disponibili

### 📊 Gestione presenze
- Registrazione presenze studenti
- Consultazione storico presenze
- Verifica partecipazione agli eventi

---

## ⚙️ Installazione ed esecuzione

### 1. Clonare la repository
```bash
git clone https://github.com/DamianoGiangregorio/OpenDayCheckPresence.git
2. Configurazione database
Importare eventuali script SQL presenti nella cartella database
Configurare la connessione nel backend
3. Avvio del progetto
Avviare il backend secondo il linguaggio utilizzato
Aprire il frontend nel browser (se presente)
Verificare la connessione al database
📡 Flusso dell’applicazione
Creazione di un evento Open Day
Registrazione degli studenti nel sistema
Registrazione delle presenze durante l’evento
Salvataggio dei dati nel database
Consultazione dei risultati e delle statistiche
📌 Obiettivo del progetto

Questo progetto è stato realizzato a scopo didattico per:

comprendere la gestione di sistemi informativi
simulare un’applicazione client-server
lavorare con database relazionali
sviluppare logiche di backend strutturate
🔮 Possibili miglioramenti
Sistema di autenticazione (login admin/studente)
Dashboard con statistiche e grafici
Generazione QR code per la presenza
API REST completa
Miglioramento interfaccia grafica
Deploy su server cloud
👨‍💻 Autore

Damiano Giangregorio
GitHub: https://github.com/DamianoGiangregorio

📄 Licenza

Progetto a scopo didattico e personale.


---

Se vuoi, nel prossimo step posso anche:
- :contentReference[oaicite:0]{index=0}
- oppure :contentReference[oaicite:1]{index=1}
