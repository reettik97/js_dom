function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

var change_color_event = document.querySelector('body');
  
window.addEventListener('click' , function(e){
    var random = getRandomColor();
    change_color_event.style.background = random; 
})


  