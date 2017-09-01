$(document).ready(function() {
  console.log("Starting Clean");
  document.getElementById("class330").style.display = "none";
  document.getElementById("class216").style.display = "none";
  document.getElementById("class132").style.display = "none";
  document.getElementById("class131").style.display = "none";
});

var cmsc330 = 0;
var cmsc216 = 0;
var cmsc132= 0;
var cmsc131 = 0;

function SwitchProjects(classnum) {

  if (classnum === 330){
    if (cmsc330 === 0){
      document.getElementById("class330").style.display = "block";
      cmsc330 = 1;
    } else{
      document.getElementById("class330").style.display = "none";
      cmsc330 = 0;
    }

  } else if (classnum === 216) {
    if (cmsc216 === 0){
      document.getElementById("class216").style.display = "block";
      cmsc216 = 1;

    } else{
      document.getElementById("class216").style.display = "none";
      cmsc216 = 0;
    }

  }else if (classnum === 132) {
    if (cmsc132 === 0){
      document.getElementById("class132").style.display = "block";
      cmsc132 = 1;

    } else{
      document.getElementById("class132").style.display = "none";
      cmsc132 = 0;
    }

  }else if (classnum === 131) {
    if (cmsc131 === 0){
      document.getElementById("class131").style.display = "block";
      cmsc131 = 1;

    } else{
      document.getElementById("class131").style.display = "none";
      cmsc131 = 0;
    }

  }

}
