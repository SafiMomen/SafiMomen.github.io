let emailForm = document.getElementsByClassName("emailForm");

let emailField = document.querySelector(".emailForm input");
let emailSubmit = document.getElementById("emailSectionButton");

let emailSuccessful = document.getElementById("finishedEmailSection");

emailSubmit.addEventListener("click", ()=>{
  if (emailField.value.length <= 0) return;
  
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