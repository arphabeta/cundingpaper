$(document).ready(function(){

  $(".arrow-down").click(function(){
    // $("#selectBox").text('원하는 문법 선택');
    $(".arrow-up").show().stop(true,true);
    $(".arrow-down").hide();
    $(".off_list").show().stop(true,true);
  });
  $(".arrow-up").click(function(){
    $(".arrow-up").hide();
    $(".arrow-down").show();
    $(".off_list").hide();
    $(".section2").hide();
  });

    $("#selectBox").click(function(){
        $(".off_list").hide();
        $(".arrow-up").hide();
        $(".arrow-down").show();
        $(".if").hide();

        $(".ifs").hide();
        $(".else").hide();
    		$(".elseif").hide();
        $(".while").hide();
        $(".switch").hide();
        $(".for").hide();
        $(".fors").hide();
   });

   var num=$(".off_list").index();  //0,1,2.....순서를 매겨줌

    $(".off_list").eq(0).click(function(){
      $("#selectBox").text('if문');
      $(".arrow-up").hide();
      $(".arrow-down").show();
      $(".off_list").hide();

      $(".if").show().stop(true,true);
      $(".ifs").hide();
      $(".else").hide();
    	$(".elseif").hide();
      $(".while").hide();
      $(".switch").hide();
      $(".for").hide();
      $(".fors").hide();
   });

   $(".off_list").eq(1).click(function(){
     $("#selectBox").text('중첩 if문');
     $(".arrow-up").hide();
     $(".arrow-down").show();
     $(".off_list").hide();

     $(".if").hide();
     $(".ifs").show().stop(true,true);
     $(".else").hide();
     $(".elseif").hide();
     $(".while").hide();
     $(".switch").hide();
     $(".for").hide();
     $(".fors").hide();
  });

  $(".off_list").eq(2).click(function(){
    $("#selectBox").text('else문');
    $(".arrow-up").hide();
    $(".arrow-down").show();
    $(".off_list").hide();

    $(".if").hide();
    $(".ifs").hide();
    $(".else").show().stop(true,true);
    $(".elseif").hide();
    $(".while").hide();
    $(".switch").hide();
    $(".for").hide();
    $(".fors").hide();
 });

 $(".off_list").eq(3).click(function(){
   $("#selectBox").text('else if문');
   $(".arrow-up").hide();
   $(".arrow-down").show();
   $(".off_list").hide();

   $(".if").hide();
   $(".ifs").hide();
   $(".else").hide();
   $(".elseif").show().stop(true,true);
   $(".while").hide();
   $(".switch").hide();
   $(".for").hide();
   $(".fors").hide();
});

$(".off_list").eq(4).click(function(){
  $("#selectBox").text('while문');
  $(".arrow-up").hide();
  $(".arrow-down").show();
  $(".off_list").hide();

  $(".if").hide();
  $(".ifs").hide();
  $(".else").hide();
  $(".elseif").hide();
  $(".while").show().stop(true,true);
  $(".switch").hide();
  $(".for").hide();
  $(".fors").hide();
});

$(".off_list").eq(5).click(function(){
  $("#selectBox").text('switch문');
  $(".arrow-up").hide();
  $(".arrow-down").show();
  $(".off_list").hide();

  $(".if").hide();
  $(".ifs").hide();
  $(".else").hide();
  $(".elseif").hide();
  $(".while").hide();
  $(".switch").show().stop(true,true);
  $(".for").hide();
  $(".fors").hide();
});

$(".off_list").eq(6).click(function(){
  $("#selectBox").text('for문');
  $(".arrow-up").hide();
  $(".arrow-down").show();
  $(".off_list").hide();

  $(".if").hide();
  $(".ifs").hide();
  $(".else").hide();
  $(".elseif").hide();
  $(".while").hide();
  $(".switch").hide();
  $(".for").show().stop(true,true);
  $(".fors").hide();
});

$(".off_list").eq(7).click(function(){
  $("#selectBox").text('중첩 for문');
  $(".arrow-up").hide();
  $(".arrow-down").show();
  $(".off_list").hide();

  $(".if").hide();
  $(".ifs").hide();
  $(".else").hide();
  $(".elseif").hide();
  $(".while").hide();
  $(".switch").hide();
  $(".for").hide();
  $(".fors").show().stop(true,true);
});



});
