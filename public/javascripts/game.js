function endDrop(currentObject, ui){
	ui.draggable.attr("style", "");
	$(currentObject).removeClass('highlightDrop');
}

$(document).ready(function() {
	// Drag
	$('.letter').attr("draggable", true);
	$('.letter').draggable({
		start: function(event, ui){
			$(this).addClass('highlightDrag');
			
			var parentTag = $(this).parent();
			
			if(parentTag.hasClass("caseCentre")){
				parentTag.html('<icon class="icon-asterisk"></icon>');
			}
			
			if(parentTag.is("td")){
				$(this).droppable( "option", "disabled", false );
			}
		},	
		stop: function(event, ui){
			$(this).removeClass('highlightDrag');
		},	
		revert: true,
		zIndex: 2000,
		addClasses: false
	});
	// Drop
	$('#bag, #carrier, #board td, .letter').droppable({
		hoverClass: "highlightDrop"
	});
	
	$('#carrier').droppable({
		'drop': function(event, ui){
			$(this).append(ui.draggable);
			endDrop(this, ui);
			ui.draggable.droppable( "option", "disabled", false );
		}
	});
	
	$('#bag').droppable({
		'drop': function(event, ui){
			$('#endSac').before(ui.draggable);
			endDrop(this, ui);
			ui.draggable.droppable( "option", "disabled", false );
		}
	});
	
	$('.letter').droppable({
		'drop': function(event, ui){
			$(this).before(ui.draggable);
			endDrop(this, ui);
			ui.draggable.droppable( "option", "disabled", false );
		}
	});
	
	$('#board td').droppable({
		'drop': function(event, ui){
			$(this).html(ui.draggable);
			endDrop(this, ui);
			$(this).droppable( "option", "disabled", true );
			ui.draggable.droppable( "option", "disabled", true );
		}
	});
	

//	$('#searchButton').click(function(){
//		var children = $("#realPortePiece").children().text()
//
//	});
});