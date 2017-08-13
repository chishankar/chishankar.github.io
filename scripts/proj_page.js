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

    document.getElementById("word1").innerHTML= '<b>  Class  </b>';
    document.getElementById("word2").innerHTML= ' Personal';
    document.getElementById("word3").innerHTML= ' Bitcamp ';
  } else if (classnum === 2) {
    console.log("Switching to personal_projects");
    document.getElementById("class_projects").style.display = "none";
    document.getElementById("personal_projects").style.display = "block";
    document.getElementById("bitcamp_projects").style.display = "none";

    document.getElementById("word1").innerHTML= '  Class  ';
    document.getElementById("word2").innerHTML= '<b> Personal</b>';
    document.getElementById("word3").innerHTML= ' Bitcamp ';
  } else if (classnum === 3) {
    console.log("Switching to bitcamp_projects");
    document.getElementById("class_projects").style.display = "none";
    document.getElementById("personal_projects").style.display = "none";
    document.getElementById("bitcamp_projects").style.display = "block";

    document.getElementById("word1").innerHTML= '  Class  ';
    document.getElementById("word2").innerHTML= ' Personal';
    document.getElementById("word3").innerHTML= '<b> Bitcamp </b>';
  }
}
