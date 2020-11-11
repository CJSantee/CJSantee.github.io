/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function changeNav() {
    if(document.getElementById("mySidenav").style.width == "250px"){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    else{
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.body.style.backgroundColor = "white";
    }
}
    
function changeMenu(x) {
  x.classList.toggle("change");
}