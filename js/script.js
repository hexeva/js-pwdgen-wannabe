// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// DICHIARAZIONI

// valore password fisso
const passwordNumber = 21;


// Chiedo nome utente
const userName = prompt ('Come ti chiami?');

// chiedo il cognome all'utente
const lastName = prompt ('Qual\'è il tuo cognome?');

// chiedo il colore preferito all'utente

const favoriteColor = prompt ('Qual\'è il tuo colore preferito?');

// genero la password
const finalPassword = `${userName}${lastName}${favoriteColor}${passwordNumber}`;



// genero un messaggio per l'utente

const userMessage = 'la sua nuova password è: ';






// OUTPUT

document.getElementById('yourPassword').innerHTML = userMessage + finalPassword;