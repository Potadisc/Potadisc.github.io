function stuff() {
  if (document.getElementById('textbox').value != "") {
  document.getElementById('textbox').style.border = "1px solid rgb(89, 255, 0)";
  } else {
  document.getElementById('textbox').style.border = "1px solid rgb(255, 255, 255)";
  }
  setTimeout(() => {
  stuff();
}, 10); //restart stuff loop every 10 ms
} //stuff() tests if there is text in the textbox and if so, makes the outline green. If not, it becomes white.


stuff();

function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("backoverlay").style.display = "block";
  document.getElementById("menu").style.display = "none";
  document.getElementById('test').innerHTML = "1";
  document.getElementById('check').innerHTML = "1";
  document.getElementById('page').style.display = "none";
  time()
}

function off() {
  if (document.getElementById('check').innerHTML == 0) {
  document.getElementById("backoverlay").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlayshow").style.display = "block";
  document.getElementById('test2').innerHTML = "100";
  document.getElementById("menu").style.display = "";
  document.getElementById('page').style.display = "";
  time2()
}
}


function time() {
  if (document.getElementById('test').innerHTML != "151") {
    

    var num = parseInt(document.getElementById('test').innerHTML, 10);
    document.getElementById('overlay').style.opacity = (num / 100)
    document.getElementById('test').innerHTML = num + 1
      setTimeout(() => {
      time();
      }, 0);
  } else {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("backoverlay").style.display = "block";
    document.getElementById('check').innerHTML = "0";
  }
}



function time2() {
  if (document.getElementById('test2').innerHTML != "0") {
    

    var num = parseInt(document.getElementById('test2').innerHTML, 10);
    document.getElementById('overlayshow').style.opacity = (num / 100)
    document.getElementById('test2').innerHTML = num - 1
      setTimeout(() => {
      time2();
      }, 0);
  } else {
   document.getElementById("overlayshow").style.display = "none";
  }
}
