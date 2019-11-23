$(document).ready(function(){

  $("#selectBox").change(function() {
  	var state = $("#selectBox option:selected").val();
  	if ( state == "option0" ) {
  		$(".if").hide();
      $(".ifs").hide();
      $(".else").hide();
  		$(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
  	}
    if ( state == "option1" ) {
  		$(".if").show();
      $(".ifs").hide();
      $(".else").hide();
  		$(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
  	}
    if ( state == "option2" ) {
      $(".if").hide();
      $(".ifs").show();
      $(".else").hide();
      $(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
    }
    if ( state == "option3" ) {
      $(".if").hide();
      $(".ifs").hide();
      $(".else").show();
      $(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
    }
    if ( state == "option4" ) {
      $(".if").hide();
      $(".ifs").hide();
      $(".else").hide();
      $(".elseif").show();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
    }
    if ( state == "option5" ) {
      $(".if").hide();
      $(".ifs").hide();
      $(".else").hide();
      $(".elseif").hide();
      $(".while").show();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
    }
    if ( state == "option6" ) {
      $(".if").hide();
      $(".ifs").hide();
      $(".else").hide();
      $(".elseif").hide();
      $(".while").hide();
      $(".switch").show();
      $(".for").hide();
      $(".fors").hide();
    }
    if ( state == "option7" ) {
      $(".if").hide();
      $(".ifs").hide();
      $(".else").hide();
      $(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").show();
      $(".fors").hide();
    }
    if ( state == "option8" ) {
      $(".if").hide();
      $(".ifs").hide();
      $(".else").hide();
      $(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").show();
    }

  });

});
