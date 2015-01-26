
$(document).ready(function(){
var Grid = function(width, $container){
    this.cells = [];
    this.width = width;
    this.$container = $container;
    this.resizeContainer();
};

var Cell = function(x, y, node){

};

Grid.prototype.addCell = function(x, y, $node){
    var cell = new Cell(x, y, $node);
    this.cells.push(cell);
    this.$container.append($node);
};

Grid.prototype.resizeContainer = function(){
    this.$container.css("width", (this.width * 50).toString() + "px");
    debugger
};

window.$grid = null;

$('#start').click(function(){
   var input =  prompt('Type an integer between 1 and 20');
   var container = $('#grid_container');
   $('#grid_container').html(" ");

if (input >= 1 && input <= 20 ){
        $grid = new Grid(input, container);

        for (var i = 1; i <= input; i++){
            for (var j = 1; j <= input; j ++){
                    $grid.addCell(i, j, $('<div class="grid_square"></div>'));
                 


            }
        
        $('#grid_container').append('<div class="new_row"></div>');
        }


         $('.grid_square').mouseenter(function(){
            $(this).addClass('grid_square_lit');
        });


   }
   else{
    alert("pick a # between 1 and 12")
   }
});

});