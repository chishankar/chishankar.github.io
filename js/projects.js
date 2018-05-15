$(document).ready(function() {
  document.getElementById("class330").style.display = "none";
  document.getElementById("class216").style.display = "none";
  document.getElementById("class132").style.display = "none";
  document.getElementById("class131").style.display = "none";
  document.getElementById("class423").style.display = "none";
  document.getElementById("class420").style.display = "none";
  document.getElementById("class389K").style.display = "none";
});

// $(document).ready(function(){
//    var scroll_start = 0;
//    var startchange = $('#startchange');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() {
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".menu").css('color', 'black');
//        } else {
//           $('.menu').css('color', 'inherit');
//        }
//    });
//     }
// });

var cmsc330 = 0;
var cmsc216 = 0;
var cmsc132= 0;
var cmsc131 = 0;
var cmsc423 = 0;
var cmsc420 = 0;
var cmsc389K = 0;

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

  }else if (classnum === 423) {
    if (cmsc423 === 0){
      document.getElementById("class423").style.display = "block";
      cmsc423 = 1;

    } else{
      document.getElementById("class423").style.display = "none";
      cmsc423 = 0;
    }
  }else if (classnum === 420) {
    if (cmsc420 === 0){
      document.getElementById("class420").style.display = "block";
      cmsc420 = 1;

    } else{
      document.getElementById("class420").style.display = "none";
      cmsc420 = 0;
    }
  }else if (classnum === 389) {
    if (cmsc389K === 0){
      document.getElementById("class389K").style.display = "block";
      cmsc389K = 1;

    } else{
      document.getElementById("class389K").style.display = "none";
      cmsc389K = 0;
    }
  }

}
