console.log("Hello, World!");

//document.getElementById("HideButton").onclick = HideButton;
//document.getElementById("ShowButton").onclick = ShowButton;

$("#HideButton").click(HideButton);
$("#ShowButton").click(ShowButton);

function  HideButton() {

//document.getElementById("FamousQuotes").style.display = "none"
$("#FamousQuotes").fadeOut()
}

function  ShowButton() {

//document.getElementById("FamousQuotes").style.display = "block"
$("#FamousQuotes").slideDown()
$("#FamousQuotes").css("color", randomColorGenerator());

function randomColorGenerator() {
  var colors = ["red",
"blue",
"green",
"yellow",
"purple",
"black"];

var randomIndex = Math.floor(Math.random() * colors.length);

return colors[randomIndex]
}

}
