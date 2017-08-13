$(document).ready(function() {
  console.log("ready lets go!");
  SwitchToClass(2);
});

function SwitchToClass(classnum) {

  if (classnum === 1) {
    console.log("Switching to class_projects");
    document.getElementById("class_projects").style.display = "block";
    document.getElementById("personal_projects").style.display = "none";
    document.getElementById("bitcamp_projects").style.display = "none";

    document.getElementById("word1").innerHTML= '<b>Class Projects</b>';
    document.getElementById("word2").innerHTML= 'Personal Projects';
    document.getElementById("word3").innerHTML= 'Bitcamp Projects';
  } else if (classnum === 2) {
    console.log("Switching to personal_projects");
    document.getElementById("class_projects").style.display = "none";
    document.getElementById("personal_projects").style.display = "block";
    document.getElementById("bitcamp_projects").style.display = "none";

    document.getElementById("word1").innerHTML= 'Class Projects';
    document.getElementById("word2").innerHTML= '<b>Personal Projects</b>';
    document.getElementById("word3").innerHTML= 'Bitcamp Projects';
  } else if (classnum === 3) {
    console.log("Switching to bitcamp_projects");
    document.getElementById("class_projects").style.display = "none";
    document.getElementById("personal_projects").style.display = "none";
    document.getElementById("bitcamp_projects").style.display = "block";

    document.getElementById("word1").innerHTML= 'Class Projects';
    document.getElementById("word2").innerHTML= 'Personal Projects';
    document.getElementById("word3").innerHTML= '<b>Bitcamp Projects</b>';
  }
}
