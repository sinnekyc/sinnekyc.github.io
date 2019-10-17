console.log("Final Project is Working");

// from in class example. not working??
var myIntro = document.getElementById("myIntro");

function openMe(){
	// mySideNav.style.width="30vw";
	$("#myIntro").addClass("openMe");
}

function closeMe(){
	// mySideNav.style.width="0";
	$("#myIntro").removeClass("openMe");
}



// storage data in JSON, call it out
$.getJSON("../data.json", function(data){

	console.log(data);

	let myInfo = data.method;

	for(let i in myInfo){
		$(".json-container").append(myInfo[i].list + " "+ "Check my" + " " +  myInfo[i].link + " " + "!" +"<br>");

	}

})

