function endDrop(currentObject, ui){
	ui.draggable.attr("style", "");
	$(currentObject).removeClass('highlightDrop');
}


function setCase(boardCase, letterCasse){
	var line = boardCase.siblings('th').first().html();
	var column = boardCase.prevAll().length;
	var letter = letterCasse.html();		
}

function buildResultTab(datas){
	var resultTag = $('#results');
	resultTag.html("");
	if(datas == "empty"){
		resultTag.html("<td colspan=\"5\">Aucun résultats disponibles</td>");
	} else {
		for(solution in datas){
			var solutionLine = "<tr>";
			solutionLine += "<td>";
	
			solutionLine += 
				"<a href=\"http://www.cnrtl.fr/definition/"+solution+"\" target=\"_blank\">"
					+"<img class=\"ico\" src=\"/assets/images/cnrtl.ico\"/>"
				+"</a>"
				+"<a href=\"http://fr.wiktionary.org/wiki/"+solution+"\" target=\"_blank\">"
					+"<img class=\"ico\" src=\"/assets/images/wiki.ico\"/>"
				+"</a>"
				+"<a href=\"http://www.le-dictionnaire.com/definition.php?mot="+solution+"\" target=\"_blank\">"
					+"<img class=\"ico\" src=\"/assets/images/ledictionnaire.ico\"/>"
				+"</a>";
			solutionLine += "</td>";
	
			solutionLine += "<td>"+solution+"</td>";
			solutionLine += "<td>"+datas[solution]['l']+"</td>";
			solutionLine += "<td>"+datas[solution]['c']+"</td>";
			solutionLine += "<td>"+datas[solution]['p']+"</td>";
			solutionLine += "</tr>";
			resultTag.append(solutionLine);
		}
	}
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
		var board = "{'hello':'ok'}";
		$.ajax({
			url: "/find", 
			data: "word="+children+"&board="+board,
			type: "POST",
			dataType: 'json',
			success: function(data){
				var datas = data.solution;
				buildResultTab(datas);
			}
		});
	});
});
