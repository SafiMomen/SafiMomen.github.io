
function addBubbleEffect(event, container) {
  let element = document.createElement("div");
  container.appendChild(element);
  
  element.classList.add("mouseEffectBubble");
  setTimeout(()=>{
    element.classList.add("mouseEffectAnimated");
  }, 0);

  element.style.top = (event.clientY - 25) + "px";
  element.style.left = (event.clientX - 25) + "px";
  element.innerHTML = "&nbsp;";

  setTimeout(()=>{
    element.remove();
  }, 400);
}

function addMouseEffect() {
  let container = document.createElement("div");
  document.body.appendChild(container);
  container.id = "mouseEffectContainer";

  document.body.addEventListener("click", (event)=>{
    addBubbleEffect(event, container);
  });
}

document.body.onload = addMouseEffect;