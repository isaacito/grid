
$(document).ready(function(){


var Grid = function(width, $container){
    this.cells = [];
    this.width = width;
    this.$container = $container;
    this.resizeContainer();
    var map = {};

    this.withScope = function (fn) {

            return fn.call(this, map);
    };
};



var Cell = function(x, y, $node){
    this.x = x;
    this.y = y;
    this.$node = $node;
    this.$node.text("(" + [x,y].join(',') + ")");
};

Grid.prototype.addCell = function(x, y, $node){
    var cell = new Cell(x, y, $node);
    var addr = "(" + [x,y].join(',') + ")";


    this.cells.push(cell);

    this.withScope(function (map) {
        map[addr] = $node;
    });

    this.$container.append($node);
};

Grid.prototype.resizeContainer = function(){
    this.$container.css("width", (this.width * 50).toString() + "px");
};

Grid.prototype.findCell = function (x,y) {
    var loc = (y * parseInt(this.width)) + x;
    return this.cells[loc];
}


window.$grid = null;

$(' .yo').keyup(function () {

  var addr = $(this).val();

  $grid.withScope(function (m) {
     if (cell = m[addr]) {
        cell.trigger('mouseenter');
     }

  });


});

$('#start').click(function(){
   var input =  prompt('Type an integer between 1 and 20');
   var container = $('#grid_container');
   $('#grid_container').html(" ");

if (input >= 1 && input <= 20 ){
        $grid = new Grid(input, container);

        for (var i = 0; i < input; i++){
            for (var j = 0; j < input; j ++){
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