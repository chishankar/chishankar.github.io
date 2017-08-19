$(document).ready(function() {
  console.log("Starting Clean");
  document.getElementById("current_course").style.display = "none";
  document.getElementById("completed_course").style.display = "none";
});

function SwitchToClass(classnum) {

  if (classnum === 1) {
    console.log("Switching to class_projects");
    document.getElementById("completed_course").style.display = "block";
    document.getElementById("current_course").style.display = "none";

    document.getElementById("button1").innerHTML= '<b>Completed Course Work</b>';
    document.getElementById("button2").innerHTML= 'Current Course Work';
  } else if (classnum === 2) {
    console.log("Switching to personal_projects");
    document.getElementById("completed_course").style.display = "none";
    document.getElementById("current_course").style.display = "block";

    document.getElementById("word1").innerHTML= 'Completed Course Work';
    document.getElementById("word2").innerHTML= '<b>Current Course Work</b>';
  }
}
