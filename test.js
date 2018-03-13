
var request = require("request");
var mongojs = require("mongojs");
var express = require("express");
var mongoose = require("mongoose");
var db = mongojs('User', ['UserInfo']);


test = () => {
	Materialize.toast(`Welcome ${name}!`, 3000, 'rounded');

	Materialize.toast(`Your email is ${email}!`, 3000, 'rounded');

	};
// button api post
$('#formBtn').on('click', function(){
	// event.preventDefault();
name = $('#icon_prefix').val().trim();
email = $('#icon_email').val().trim();


pass1 = $('#pass1').val().trim();
pass2 = $('#pass2').val().trim();



 if (name ==='') {
 	Materialize.toast("Name not entered", 3000, 'rounded');
 	return;
 } else if(email ===''){
 	Materialize.toast("Not a vaild email address", 3000, 'rounded');
 	return;
 } 
 else if(! email.includes("@")){
 	Materialize.toast("Not a vaild email address", 3000, 'rounded');
 	return;
 }
  else if(! email.includes(".")){
  	Materialize.toast("Not a vaild email address", 3000, 'rounded');
 	return;
 }
 else {
 	test();
 }

if (pass1 === pass2){
	post();
} else {
	Materialize.toast("Password does not match", 3000, 'rounded');
	return;
}



	}); 

post = () => {
// $('#staggered-test').html("<h1>Thank you!</h1>");
}



