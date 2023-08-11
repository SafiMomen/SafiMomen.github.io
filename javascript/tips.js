let gameTitle = document.getElementById("gameTitle");
let gameTitleTip = document.querySelector("#gameTitle span");

let timeOutId;

const text = "P R E - A L P H A";
let currentText = "";
gameTitleTip.innerHTML = currentText;

gameTitle.addEventListener("mouseenter", ()=>{
  clearInterval(timeOutId);

  let index = currentText.length;
  timeOutId = setInterval(()=>{
    const letter = text.charAt(index);
    currentText += letter;
    gameTitleTip.innerHTML = currentText;
    index++;

    if (index >= text.length) {
      clearInterval(timeOutId);
    }
  }, 50);
});

gameTitle.addEventListener("mouseleave", ()=>{
  clearInterval(timeOutId);

  let index = currentText.length;
  timeOutId = setInterval(()=>{
    const letter = text.charAt(index);
    currentText = currentText.substring(0, index);
    gameTitleTip.innerHTML = currentText;
    index--;

    if (index < 0) {
      clearInterval(timeOutId);
    }
  }, 25);
});