//Select the section with an id of container without using querySelector.

let container_section = document.getElementById('container');


//Select the section with an id of container using querySelector.

let container_section_qs = document.querySelector('#container'); 

//Select all of the list items with a class of "second".

let class_second = document.querySelectorAll('.second');
// console.log(class_second);


//Select a list item with a class of third, but only the list item inside of the ol tag.

let ordered_list = document.querySelectorAll("ol>li");
//  console.log(ordered_list);

//Give the section with an id of container the text "Hello!".

var temp = document.querySelector('#container') ;

temp.innerHTML += "<hr>Hello!";
// temp.textContent += "Hello!";
temp.style.padding = "2rem";



//Add the class main to the div with a class of footer.

let footer = document.querySelector('.footer');
footer.classList.add('main');
// console.log(footer.classList);

//Remove the class main on the div with a class of footer.
 
footer.classList.remove('main');
// console.log(footer.classList);

//Create a new li element.

let new_li = document.createElement('li');

//Give the li the text "four".

new_li.textContent = "four";


//Append the li to the ul element.

let ul =  document.querySelector('ul');
ul.appendChild(new_li);

//Loop over all of the list inside the ol tag and give them a background color of "green".
 
  let ol = document.querySelector('ol');
  for(let i=0;i<ol.children.length;i++){
    ol.children[i].style.background = 'green';
  }

//Remove the div with a class of footer.

document.body.removeChild(footer);