// add plaay audio
var myAudio = document.getElementById("player");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  // $('.extra-button-cont .icon-bar a:last-child img').removeClass('mute');
  $('.extra-button-cont .icon-bar a').last().find('img').removeClass('mute');
};
myAudio.onpause = function() {
  isPlaying = false;
  // $('.extra-button-cont .icon-bar a:last-child img').addClass('mute');
  $('.extra-button-cont .icon-bar a').last().find('img').addClass('mute');
};





// $(".inside-cont").hover(function() {
//   picToSee = $(this).attr("data-productid");
//   alert(picToSee);
//   switch(picToSee) {
//     case "1":
//       alert(picToSee);
//       break;
//     case "2":
//       alert(picToSee);
//       break;
//     case "3":
//       alert(picToSee);
//       break;
//     case "4":
//       alert(picToSee);
//       break;
//       alert(picToSee);
//     case "5":
//       alert(picToSee);
//         break;
//     default:
//       // do nothing
//   }
//   // $(this).css("background-color", "yellow");
//   // }, function(){
//   // $(this).css("background-color", "pink");
// });

function hoverContImage(imageShow) {
  
  $('.pic1').hide();
  switch(imageShow) {
    case 1:
      $('.pic1-1').show();
      break;
    case 2:
      $('.pic1-2').show();
      break;
    case 3:
      $('.pic1-3').show();
      break;
    case 4:
      $('.pic1-4').show();
      break;
    case 5:
      $('.pic1-5').show();
      break;
  }

}

function hoverOutContImage(imageShow) {
  
  $('.pic1').show();
  $(' img[class*="pic1-"]').hide();
  
}

function navToggle(x) {
  x.classList.toggle("change");
  $('.icon-bar').toggle("active");
}