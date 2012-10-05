function endDrop(currentObject, ui){
	ui.draggable.attr("style", "");
	$(currentObject).removeClass('highlightDrop');
}
var source = null;
$(document).ready(function() {
	// Drag
	$('.letter').attr("draggable", true);
	$('.letter').draggable({
		start: function(event, ui){
			console.log('----');
			$(this).addClass('highlightDrag');
			
			var parentTag = $(this).parent();
			console.log(parentTag);
			source = parentTag;
			if(parentTag.is("td")){
				$(this).droppable( "option", "disabled", false );
			}
		},	
		stop: function(event, ui){
			$(this).removeClass('highlightDrag');
			var parentTag = $(this).parent();
			console.log(parentTag);
			console.log(source);
			if(source.hasClass("caseCentre") && source != parentTag){
				source.html('<icon class="icon-asterisk"></icon>');
			}
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