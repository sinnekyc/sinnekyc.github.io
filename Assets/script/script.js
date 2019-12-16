console.log("Final Project is Working");

// from in class example. not working??
var myIntro = document.getElementById("myIntro");

function openMe() {
  // mySideNav.style.width="30vw";
  $("#myIntro").addClass("openMe");
}

function closeMe() {
  // mySideNav.style.width="0";
  $("#myIntro").removeClass("openMe");
}

// // tutor
// $(document).ready(function() {
//   $("#myCanvas").click(function() {
//     alert("Canvas Clicked");
//   });
// });

// storage data in JSON, call it out
//for some reasons, not working
$.getJSON("/Assets/json.js", function(data) {
  console.log("json is working.");
  console.log(data);

  let myProject = data.project;

  $("#item1").append(myProject[0].name + "  " + myProject[0].method);
  $("#item2").append(myProject[1].name + "  " + myProject[1].method);

  // for(let i in myProject){
  // 	$(".items").append(myProject[i].project+myProject[i].method);

  // }
});

//let the navigator stick to certain scroll position
//know the scroll position of #portfolio

window.addEventListener("scroll", function(e) {
  let portfolioPos = $("#portfolio").offset().top;
  console.log(portfolioPos);

  let navPos = $(window).scrollTop();

  //from console.log we know the 848 is the position we want
  if (navPos >= portfolioPos) {
    console.log(navPos);
    $("header").css("background-color", "#555555");
  } else {
    $("header").css("background-color", "transparent");
  }
});

// copying to clipboard
