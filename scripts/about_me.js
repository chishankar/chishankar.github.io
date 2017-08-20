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

    document.getElementById("button1").innerHTML= '<b>Completed Courses</b>';
    document.getElementById("button2").innerHTML= 'Current Course Work';
    document.getElementById("button3").innerHTML= 'School Activities';

  } else if (classnum === 2) {
    console.log("Switching to personal_projects");
    document.getElementById("completed_course").style.display = "none";
    document.getElementById("current_course").style.display = "block";
    document.getElementById("school_activities").style.display = "none";

    document.getElementById("button1").innerHTML= 'Completed Courses';
    document.getElementById("button2").innerHTML= '<b>Current Courses</b>';
    document.getElementById("button3").innerHTML= 'School Activities';

  }else if (classnum === 3) {
    console.log("Switching to personal_projects");
    document.getElementById("completed_course").style.display = "none";
    document.getElementById("current_course").style.display = "none";
    document.getElementById("school_activities").style.display = "block";

    document.getElementById("button1").innerHTML= 'Completed Courses';
    document.getElementById("button2").innerHTML= 'Current Courses';
    document.getElementById("button3").innerHTML= '<b>School Activities</b>';

  }
}
