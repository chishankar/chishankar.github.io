function SwitchToClass(classnum){


    if(classnum === 1) {
        console.log("Switching to video 1");
        document.getElementById("cmsc216").style.display = "block";
        document.getElementById("cmsc132").style.display = "none";
        document.getElementById("cmsc131").style.display = "none";
    }
    else if(classnum === 2) {
        console.log("Switching to video 2");
        document.getElementById("cmsc216").style.display = "none";
        document.getElementById("cmsc132").style.display = "block";
        document.getElementById("cmsc131").style.display = "none";
    }
    else if(classnum === 3) {
        console.log("Switching to video 3");
        document.getElementById("cmsc216").style.display = "none";
        document.getElementById("cmsc132").style.display = "none";
        document.getElementById("cmsc131").style.display = "block";
    }
}

$( document ).ready(function() {
    // console.log( "ready!" );
    SwitchToClass(1);
});
