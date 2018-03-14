  $(document).ready(function() {	
var name, email, pass1, pass2;

Materialize.updateTextFields();
console.log('working');

var options = [
  // STAGGERED LIST TRANSITION
  {selector: '#staggered-test', offset: 100, callback: function(el) {
    Materialize.showStaggeredList($(el));
  } },
  // FADE IN ANY IMAGES IN THE STAGGERED LIST       
  {selector: '#staggered-test', offset: 100, callback: function(el) {
    Materialize.fadeInImage($(el));
  } }
];
Materialize.scrollFire(options);


test = () => {
	Materialize.toast(`Welcome ${name}!`, 3000, 'rounded');
	
	};
	$('#clear').on('click', function(){
	$.ajax({
		type: 'DELETE',
		url: '/clear-data',
		success: function(response) {
				if (response == 'error') {
						console.log('Err!');
				}
				else {
						alert('Success');
						location.reload("/");
				}
		}
	});
});
// button api post
$('#formBtn').on('click', function(){
	// event.preventDefault();
name = $('#icon_prefix').val().trim();
email = $('#icon_email').val().trim();


pass1 = $('#pass1').val().trim();
pass2 = $('#pass2').val().trim();



 if (name ==='') {
	 Materialize.toast("Name not entered", 3000, 'rounded');
	 	event.preventDefault();

 	return;
 } else if(email ===''){
	 Materialize.toast("Not a vaild email address", 3000, 'rounded');
	 	event.preventDefault();

 	return;
 } 
 else if(! email.includes("@")){
	 Materialize.toast("Not a vaild email address", 3000, 'rounded');
	 	event.preventDefault();

 	return;
 }
  else if(! email.includes(".")){
	  Materialize.toast("Not a vaild email address", 3000, 'rounded');
	  	event.preventDefault();

 	return;
 }
 else {
 	test();
 }

if(pass1 != pass2){
	Materialize.toast("Password does not match", 3000, 'rounded');
	event.preventDefault();
} else if(pass1==="") {
	Materialize.toast("Password not entered", 3000, 'rounded');
	event.preventDefault();
	

} 
else if(pass1.length <= 6) {
	Materialize.toast("Password needs to be 6 characters", 3000, 'rounded');
	event.preventDefault();
	

}else {
	Materialize.toast("You are now entered in the database", 3000, 'rounded');
	$('#icon_prefix').val('');
	$('#icon_email').val('');
	$('#pass1').val('');
	$('#pass2').val('');
	$("#switchName").removeClass('active');
	$("#switchEmail").removeClass('active');
	$("#switchPass1").removeClass('active');
	$("#switchPass2").removeClass('active');
	
}



	}); 


  });
















