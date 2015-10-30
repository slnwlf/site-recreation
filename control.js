 $(document).ready(function (){
 	$("#clicktest").on("click", function handleClick(event){
  		event.preventDefault();
  		alert("Clicked that link like a boss");
	});
	$(".img-responsive").on("click", function handleClick(event){
		event.preventDefault();
  		alert("Clicked that helmet like a boss");
	});

  	$("div").scroll();
  	alert("Good job scrolling!");

	$(".container1").on("mouseover" , function (e) {
	$(this).fadeOut("slow");
	});



});

