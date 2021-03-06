//Hente ut html elementet og legge til addEventListener og en funksjon
const form = document.querySelector ("form#signup");
form.addEventListener("submit", validateForm);

//Hente ut inputs fra html!
const fullName = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const message = document.querySelector ("textarea#message");

//Hente ut alle span-ene fra html!
const nameMsg = document.querySelector ("span#nameMsg");
const subjectMsg = document.querySelector ("span#subjectMsg");
const emailMsg = document.querySelector ("span#emailMsg");
const messageMsg = document.querySelector ("span#messageMsg");



function validateForm(e) {
  // Forhindre at skjema submitter før det er ferdig
  e.preventDefault();

  // Validate Name,no digits and at least 5 charachters
  let submittedName = fullName.value.trim(); 
  console.log("Name: " + submittedName); 
  nameMsg.innerHTML = ""; // Clear earlier messages
  if (submittedName.length < 3) { // Check if name is long enough
    nameMsg.innerHTML += "Navnet må være minst 3 bokstaver langt! "; 
  }  
  if (/\d/.test(submittedName)) { // And make sure it don't contain any digits
    nameMsg.innerHTML += "Navnet kan ikke inneholde tegn! ";
  }

  //Validate subject (minimum lengde på 15)
  let submittedSubject = subject.value.trim();
  console.log("Subject: " + submittedSubject);
  subjectMsg.innerHTML = ""; //Clear earlier messages
  if (submittedSubject.length < 5) {
      subjectMsg.innerHTML += "Temaet må være minst 55 bokstaver langt!";
  }
  if (/\d/.test(submittedSubject)) { //Make sure it dont contain any digits 
    subjectMsg.innerHTML += "Temaet kan ikke inneholde tegn!";
  }

  // Validate e-mail
  let submittedEmail = email.value.trim();
  console.log("Email: " + submittedEmail); 
  emailMsg.innerHTML = ""; // Clear earlier messages    
  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(submittedEmail)) {
    emailMsg.innerHTML += "Vennligst fyll inn en gyldig epost!";
  }

  //Validate Message
  let submittedMessage = message.value.trim();
  console.log("Message: " + submittedMessage);
  messageMsg.innerHTML = ""; // Clear earlier messages
  if (submittedMessage.length < 25) {
    messageMsg.innerHTML += "Beskjeden må være minst 25 bokstaver!";
  } 

if (nameMsg.innerHTML === "" && subjectMsg.innerHTML === "" && emailMsg.innerHTML === "" && messageMsg.innerHTML === "") {
    console.log("Form is submitted!");
    form.submit(); ///for å submitte skjema 
}
 else {
    console.log("You still have validation errors");
}
}