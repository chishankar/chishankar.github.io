$(document).ready(function() {
  console.log("Start Switching");
  SwitchToClass(2);
});

function SwitchToClass(classnum) {

  if (classnum === 1) {
    console.log("Switching to class_projects");
    document.getElementById("class_projects").style.display = "block";
    document.getElementById("personal_projects").style.display = "none";
    document.getElementById("bitcamp_projects").style.display = "none";

  } else if (classnum === 2) {
    console.log("Switching to personal_projects");
    document.getElementById("class_projects").style.display = "none";
    document.getElementById("personal_projects").style.display = "block";
    document.getElementById("bitcamp_projects").style.display = "none";

  } else if (classnum === 3) {
    console.log("Switching to bitcamp_projects");
    document.getElementById("class_projects").style.display = "none";
    document.getElementById("personal_projects").style.display = "none";
    document.getElementById("bitcamp_projects").style.display = "block";

  }
}
