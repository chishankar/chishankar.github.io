$(document).ready(function() {
  console.log("Starting Clean");
  document.getElementById("current_course").style.display = "none";
  document.getElementById("completed_course").style.display = "none";
  document.getElementById("school_activities").style.display = "none";

});

function SwitchToClass(classnum) {

  if (classnum === 1) {
    console.log("Switching to class_projects");
    document.getElementById("completed_course").style.display = "block";
    document.getElementById("current_course").style.display = "none";
    document.getElementById("school_activities").style.display = "none";

  } else if (classnum === 2) {
    console.log("Switching to personal_projects");
    document.getElementById("completed_course").style.display = "none";
    document.getElementById("current_course").style.display = "block";
    document.getElementById("school_activities").style.display = "none";

  }else if (classnum === 3) {
    console.log("Switching to personal_projects");
    document.getElementById("completed_course").style.display = "none";
    document.getElementById("current_course").style.display = "none";
    document.getElementById("school_activities").style.display = "block";

  }
}
