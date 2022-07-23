window.onscroll = function() {addHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function addHeader() 
{
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}