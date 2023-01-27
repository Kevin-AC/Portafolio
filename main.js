let image = document.getElementById("image1");
let boton=document.getElementById("boton1")
let image2 = document.getElementById("image2");
let boton2=document.getElementById("boton2")
const botones=document.querySelectorAll('bootones')
image.addEventListener("mouseover", function() {
    ver()
    
});
image.addEventListener('mouseout', () => {
    ocultar()

  });

  function ver(){
    boton.classList.add("flex")
    boton.classList.remove("hidden")
  }
  function ocultar(){
    boton.classList.remove("flex");
    boton.classList.add("hidden")
  }

  