$(document).ready(function(){

// Hide event details initially
$(".details").hide();


// Show / Hide event details
$(".toggleBtn").click(function(){

let eventDiv=$(this).closest(".event");

eventDiv.find(".details").slideToggle();

if($(this).text()=="Show Details")
{
$(this).text("Hide Details");
}
else
{
$(this).text("Show Details");
}

// Change background color
$(".event").css("background","#ffffff");

eventDiv.css("background","#d1ecf1");

// Highlight event title
eventDiv.find("h3").css("color","blue");

// Get event title
let title=eventDiv.find("h3").text();

alert("Event Selected: "+title);

});


// Register button redirect
$(".registerBtn").click(function(){

let title=$(this).closest(".event").find("h3").text();

window.location.href="registration.html?event="+encodeURIComponent(title);

});


// Get event name in registration page
const params=new URLSearchParams(window.location.search);

let event=params.get("event");

$("#eventName").val(event);


// Submit button validation
$("#submitBtn").click(function(){

let name=$("#name").val();
let email=$("#email").val();
let mobile=$("#mobile").val();

let valid=true;

$("input").css("border","1px solid black");

$("#message").text("");

if(name=="")
{
$("#message").text("Name cannot be empty")
.css("color","red");

$("#name").css("border","2px solid red");

valid=false;
}

let emailPattern=/^\S+@\S+\.\S+$/;

if(!emailPattern.test(email))
{
$("#message").text("Invalid Email Format")
.css("color","red");

$("#email").css("border","2px solid red");

valid=false;
}

let mobilePattern=/^[0-9]{10,}$/;

if(!mobilePattern.test(mobile))
{
$("#message").text("Mobile number must contain at least 10 digits")
.css("color","red");

$("#mobile").css("border","2px solid red");

valid=false;
}

if(valid)
{
$("#message")
.text("Registration Successful for "+name)
.css("color","green");

$("#submitBtn")
.prop("disabled",true)
.text("Registered");
}

});


// Reset button
$("#resetBtn").click(function(){

$("#regForm")[0].reset();

$("#message").text("");

$("input").css("border","1px solid black");

$("#submitBtn")
.prop("disabled",false)
.text("Submit");

});

});