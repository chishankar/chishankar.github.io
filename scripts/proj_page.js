$(document).ready(function() {
     console.log( "ready lets go!" );
     SwitchToClass(1);
});

function SwitchToClass(classnum){

    if(classnum === 1) {
        console.log("Switching to video 1");
        document.getElementById("class_projects").style.display = "block";
        document.getElementById("personal_projects").style.display = "none";
        document.getElementById("bitcamp_projects").style.display = "none";
    }
    else if(classnum === 2) {
        console.log("Switching to video 2");
        document.getElementById("class_projects").style.display = "none";
        document.getElementById("personal_projects").style.display = "block";
        document.getElementById("bitcamp_projects").style.display = "none";
    }
    else if(classnum === 3) {
        console.log("Switching to video 3");
        document.getElementById("class_projects").style.display = "none";
        document.getElementById("personal_projects").style.display = "none";
        document.getElementById("bitcamp_projects").style.display = "block";
    }
}
