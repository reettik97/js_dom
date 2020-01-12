function display(event){
    // screenX` `screenY` `clientX` `clientY
       let screenX = document.querySelector(".screenX");

       let screenY = document.querySelector(".screenY");
       let clientX = document.querySelector(".clientX");
       let clientY = document.querySelector(".clientY");
       console.dir(event)
       

       clientX.textContent = event.clientX;
       clientY.textContent = event.clientY;
       screenX.textContent = event.screenX;
       screenY.textContent = event.screenY;


}
document.body.addEventListener('mousemove' , display);