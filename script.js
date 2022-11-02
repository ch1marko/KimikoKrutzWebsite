let myNav1 = document.getElementById("header");
let myNav2 = document.getElementById("menu-list1");

window.onscroll = function () {

    if (window.scrollY > 20) {

        myNav1.classList.add("scrolled")
        myNav2.classList.add("scrolled")
    } else {
        myNav1.classList.remove("scrolled")
        myNav2.classList.remove("scrolled")
    }

}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function openModal1(){
    document.getElementById("myModal1").style.display = "block"; 
}
function openModal2(){
    document.getElementById("myModal2").style.display = "block"; 
}
function openModal3(){
    document.getElementById("myModal3").style.display = "block";
}

function openModal4() {
    document.getElementById("myModal4").style.display = "block";
}

function openModal5(){
    document.getElementById("myModal5").style.display = "block"; 
}
function openModal6(){
    document.getElementById("myModal6").style.display = "block"; 
}
function openModal7(){
    document.getElementById("myModal7").style.display = "block";
}

function openModal8() {
    document.getElementById("myModal8").style.display = "block";
}

function openModal9(){
    document.getElementById("myModal9").style.display = "block"; 
}
function openModal10(){
    document.getElementById("myModal10").style.display = "block"; 
}
function openModal11(){
    document.getElementById("myModal11").style.display = "block";
}
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal1").style.display = "none";
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("myModal3").style.display = "none";
    document.getElementById("myModal4").style.display = "none";
    document.getElementById("myModal5").style.display = "none";
    document.getElementById("myModal6").style.display = "none";
    document.getElementById("myModal7").style.display = "none";
    document.getElementById("myModal8").style.display = "none";
    document.getElementById("myModal9").style.display = "none";
    document.getElementById("myModal10").style.display = "none";
    document.getElementById("myModal11").style.display = "none";
}


// Media Querry for the hero image
let myMediaQuery = window.matchMedia('(min-width: 600px)');
 
function widthChangeCallback(myMediaQuery) {
  if(myMediaQuery.matches) {
    document.getElementById("img-bg").style.display = "block";
    document.getElementById("img-bground2").style.display = "none";

   } else {
    document.getElementById("img-bg").style.display = "none";
    document.getElementById("img-bground2").style.display = "block";
   }
}

myMediaQuery.addEventListener('change', widthChangeCallback);

widthChangeCallback(myMediaQuery);