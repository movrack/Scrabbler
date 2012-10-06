function endDrop(currentObject, ui){
	ui.draggable.attr("style", "");
	$(currentObject).removeClass('highlightDrop');
}


function setCase(boardCase, letterCasse){
	var line = boardCase.siblings('th').first().html();
	var column = boardCase.prevAll().length;
	var letter = letterCasse.html();		
	
}

var board = null;
var source = null;
$(document).ready(function() {
	// Drag
	$('.letter').attr("draggable", true);
	$('.letter').draggable({
		start: function(event, ui){
			$(this).addClass('highlightDrag');
			
			var parentTag = $(this).parent();
			source = parentTag;
			if(parentTag.is("td")){
				$(this).droppable( "option", "disabled", false );
			}
		},	
		stop: function(event, ui){
			$(this).removeClass('highlightDrag');
			var parentTag = $(this).parent();
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
			var letterCasse = ui.draggable;
			$(this).html(letterCasse);
			endDrop(this, ui);
			$(this).droppable( "option", "disabled", true );
			letterCasse.droppable( "option", "disabled", true );
			
			setCase($(this), letterCasse);
		}
	});
			

	$('#searchButton').click(function(){
		var children = $("#carrier").children().text();
		$.ajax({
			url: "/find/"+children,
			type: "GET",
			success: function(data){
				console.log(data);
				alert(data);
			}
		});
	});
});
