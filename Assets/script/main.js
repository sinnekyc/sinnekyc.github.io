var myIntro = document.getElementById("myIntro");

function openMe() {
  // mySideNav.style.width="30vw";
  $("#myIntro").addClass("openMe");
}

function closeMe() {
  // mySideNav.style.width="0";
  $("#myIntro").removeClass("openMe");
}
