$(document).ready(function(){

	function getLatestDate(){
    	todaysDate = new Date();
    	return todaysDate;
  	}

	  var clock = false;
	  $("#time_btn").click(function(){
	    clearInterval(clock);
	    clock = setInterval( function(){
	      $("#time").html( getLatestDate() );
	    }, 1000)
	  });


		$("p").mouseenter(function(){
    	$("p").css("background-color", "#feeafa");
  	});
  	$("p").mouseleave(function(){
    	$("p").css("background-color", "rgba(255,255,252,0.3)");
  });


  $("#pic").click(function(){
    $(".introImage").show();
  });

	$("#out").on('click', function(){
      $(".mediaPhoto,.mediaText").fadeOut();
  });

  $("#in").on('click', function(){
      $(".mediaPhoto,.mediaText").fadeIn();
  });



});
