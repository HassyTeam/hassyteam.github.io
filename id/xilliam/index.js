
// Make the DIV element draggable:
dragElement(document.getElementById("info"));
dragElement(document.getElementById("cow"));
//dragElement(document.getElementById("donate"));

document.getElementById("info").style.top = "30" + "px";
document.getElementById("info").style.left = "50" + "px";

document.getElementById("cow").style.top = "600" + "px";
document.getElementById("cow").style.left = "200" + "px";

//document.getElementById("donate").style.top = "25" + "px";
//document.getElementById("donate").style.left = "970" + "px";



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //console.log(elmnt.style.top = (elmnt.offsetTop - pos2) + "px 1")
    //console.log(elmnt.style.left = (elmnt.offsetLeft - pos1) + "px 2")
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// def not copied from w3 schools 🤫

/* Add "https://api.ipify.org?format=json" to 
get the IP Address of user*/
$(document).ready(()=>{
  $.getJSON("https://api.ipify.org?format=json",
  function (data) {

      // Displayin IP address on screen
      $("#ip").html(data.ip);
  })
});

function makecowsay(txt){
  console.log("moo moo")
  fetch("https://easyapis.honeybeeks.net/api/cowsay?text="+txt)
    .then(response => response.text())
    .then((response) => {
        document.getElementById("cowsay").innerText = response
        console.log(response)
    })
    .catch(err => console.log(err))
}

document.getElementById('cowinput').style.width="600px";
document.getElementById('cowinput').value="you can actually type here?"
const input = document.getElementById('cowinput'); 
     
input.addEventListener('input', function() { 
  console.log('Input value changed:', input.value); 
  makecowsay(input.value)
}); 
