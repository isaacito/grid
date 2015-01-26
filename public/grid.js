
$(document).ready(function(){


$('#start').click(function(){
   var input =  prompt('Type an integer between 1 and 12');
   $('#grid_container').html(" ");

if (input >= 1 && input <= 12 ){
   
   var square = $("#grid_container").width/input - 2

        for (var i = 1; i <= input; i++){
            for (var j = 1; j <= input; j ++){
                 $('#grid_container').append('<div class="grid_square"></div>');
            }
        
        $('#grid_container').append('<div class="new_row"></div>');
        }
        
        $('.grid_square').css('width',square);
        $('.grid_square').css('height',square);

         $('.grid_square').mouseenter(function(){
            $(this).addClass('grid_square_lit');
        });


   }
   else{
    alert("pick a # between 1 and 12")
   }
});



});



// var start = function(option){

//     $('#grid_container').html("");

//     var input = prompt('Type an integer between 1 and 12');

//     if (input >= 1 && input <= 12){ 

//     var square_size = $('#grid_container').width()/input - 2; // The -2 accounts for border size

//         for(var i = 1; i <= input; i++){
//         for(var j = 1; j <= input; j++){

//         $('#grid_container').append('<div class="grid_square"></div>');
//         }
//         $('#grid_container').append('<div class="new_row"></div>');
//         }

// $('.grid_square').css('width',square_size);
// $('.grid_square').css('height',square_size);






// else{
// alert('Please pick a number between 1 and 12');
// }
// }
// });