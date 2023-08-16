let emailForm = document.getElementsByClassName("emailForm");

let emailField = document.querySelector(".emailForm input");
let emailSubmit = document.getElementById("emailSectionButton");

let emailSuccessful = document.getElementById("finishedEmailSection");

emailSubmit.addEventListener("click", ()=>{
  let input = emailField.value;
  if (input.length <= 5) return;
  if (!input.includes("@")) return;
  
  Array.from(emailForm).forEach((element)=>{
    if (element.classList.contains("d-flex")) {
      element.classList.remove("d-flex");
    }

    element.classList.add("d-none");
  }); 
  
  emailSuccessful.classList.replace("d-none",  "d-flex");
  setTimeout(()=>{
    emailSuccessful.classList.add("emailSuccessful");
  }, 0);
});