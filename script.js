 let text;
  let person = prompt("Please enter your name:", "Your Name Here");
  if (person == null || person == "") {
  text = "None";
 }else {
  text = person;
}
document.getElementById("fname").innerHTML = text;

let text2;
  let gender = prompt("Please enter your gender:", "M,F, NB, or GF");
  if (gender == null || gender == "") {
  text2 = "None";
 }else {
  text2 = gender;
}
document.getElementById("gender").innerHTML = text2;

let text3;
  let username = prompt("Please enter your username:", "@username");
  if (username == null || username == "") {
  text3 = "None";
 }else {
  text3 = username;
}
document.getElementById("username").innerHTML = text3;

let text4;
  let desc = prompt("Describe Yourself:", "hehehehehehehehehehehehehehehehe");
  if (desc == null || desc == "") {
  text4 = "None";
 }else {
  text4 = desc;
}
document.getElementById("desc").innerHTML = text4;

document.getElementById("ppic").src="PrezLoki.jpeg";

let text5;
  let year = prompt("What year were you born?", "954");
  if (year == null || year == "") {
  text5 = "None";
 }else {
  text5 = year;
}
document.getElementById("year").innerHTML = text5;

let text6;
  let age = prompt("How old are you?", "1,054");
  if (age == null || age == "") {
  text6 = "None";
 }else {
  text6 = age;
}
document.getElementById("age").innerHTML = text6;