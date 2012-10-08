
function highlightWord(result){
	var word = result.find('.word').html();
	var line = result.find('.line').html();
	var column = result.find('.column').html();
	var direction = result.find('.direction').find('i');
	var lineOffset = 0;
	var columnOffset = 0;
	if(direction.hasClass("icon-arrow-right")) lineOffset = 1;
	else columnOffset = 1;
	
	for(var char in word){
		if(direction.hasClass("icon-arrow-right")) columnOffset = columnOffset + 1 * 1;
		else lineOffset = lineOffset + 1 *1;
		boardHighlightCase(line, column, lineOffset, columnOffset);
	}
}

function unHighlightWord(result){
	var word = result.find('.word').html();
	var line = result.find('.line').html();
	var column = result.find('.column').html();
	var direction = result.find('.direction').find('i');
	var lineOffset = 0;
	var columnOffset = 0;
	if(direction.hasClass("icon-arrow-right")) lineOffset = 1;
	else columnOffset = 1;
	for(var char in word){
		if(direction.hasClass("icon-arrow-right")) columnOffset = columnOffset + 1 * 1;
		else lineOffset = lineOffset + 1 *1;
		boardUnHighlightCase(line, column, lineOffset, columnOffset);
	}
}

function boardHighlightCase(line, column, lineOffest, columnOffset){
	var lineInt = line.charCodeAt(0) - 64;
	var calculedLine = lineInt + lineOffest -1 *1;
	var calculedColumn = column *1 + columnOffset *1 - 2;
	$('#board').find('tr').eq(calculedLine).find('td').eq(calculedColumn).addClass('hightlightCase');
}

function boardUnHighlightCase(line, column, lineOffset, columnOffset){
	var lineInt = line.charCodeAt(0) - 64;
	var calculedLine = lineInt + lineOffset -1 *1;
	var calculedColumn = column *1 + columnOffset *1 - 2;
	$('#board').find('tr').eq(calculedLine).find('td').eq(calculedColumn).removeClass('hightlightCase');
}


function finalizeDrop(currentObject, ui){
	ui.draggable.attr("style", "");
	$(currentObject).removeClass('highlightDrop');
}


function setCase(boardCase, letterCasse){
	var line = boardCase.siblings('th').first().html();
	var column = boardCase.prevAll().length;
	var letter = letterCasse.html();		
}

function carrierWord(){
	var word = "";
	var lettersCase = $('#carrier').find('.letterCharacter');
	lettersCase.each(function(){
		word += $(this).html()+"";
	});
	
	return word;
}

function boardToJson() {

	var cases = $('#board td');
	var board = "";
	var line = 0;
	var column = 0;
	cases.each(function(){
		// Find char
		var char = $(this).find('.letterCharacter').html();
		if (typeof(char) == 'undefined') char = '_';
		
		// Offset
		column = column % 15 + 1;
		if (column == 1) line = line + 1;
		
		// Build JSon
		board += (line == 1 && column == 1) 	? '{' : ''; 
		board += (column == 1) 	? '{' : ''; 
		board += char;
		board += (column == 15) ? '}' : ',';
		board += (line == 15 && column == 15) 	? '}' : '';
		board += (line != 15 && column == 15) 	? ',' : '';
	});
	console.log(board);
	
	return board;
}

function buildResultTab(datas){
	var resultTag = $('#results');
	resultTag.html("");
	if(datas == "empty"){
		resultTag.html("<tr><td colspan=\"5\">Aucun résultats disponibles</td></tr>");
	} else {
		for(solution in datas){
			var solutionLine = "<tr class=\"result\">";
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
	
			solutionLine += "<td class=\"word\">"+solution+"</td>";
			solutionLine += "<td><span class=\"label label-success label-position\">"+datas[solution]['p']+"</span></td>";
			solutionLine += "<td><span class=\"label label-info label-position line\">"+datas[solution]['l']+"</span></td>";
			solutionLine += "<td><span class=\"label label-info label-position column\">"+datas[solution]['c']+"</span></td>";
			solutionLine += "<td><span class=\"label label-info label-position direction\">"+directionIcon(datas[solution]['d'])+"</span></td>";
			solutionLine += "</tr>";
			resultTag.append(solutionLine);
		}
	}
}

function directionIcon(directionChar){
	var icon = (directionChar == 'h') ? "icon-arrow-right" : "icon-arrow-down" ;
	return "<i class=\"icon-white "+icon+"\"></i>";
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
				source.html('<i class="icon-asterisk"></i>');
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
			finalizeDrop(this, ui);
			ui.draggable.droppable( "option", "disabled", false );
		}
	});
	
	$('#bag').droppable({
		'drop': function(event, ui){
			$('#endSac').before(ui.draggable);
			finalizeDrop(this, ui);
			ui.draggable.droppable( "option", "disabled", false );
		}
	});
	
	$('.letter').droppable({
		'drop': function(event, ui){
			$(this).before(ui.draggable);
			finalizeDrop(this, ui);
			ui.draggable.droppable( "option", "disabled", false );
		}
	});
	

	$('#board td').droppable({
		'drop': function(event, ui){
			var letterCasse = ui.draggable;
			$(this).html(letterCasse);
			finalizeDrop(this, ui);
			$(this).droppable( "option", "disabled", true );
			letterCasse.droppable( "option", "disabled", true );
			
			setCase($(this), letterCasse);
		}
	});
			

	$('#searchButton').click(function(){
		$.ajax({
			url: "/find", 
			data: "word="+carrierWord()+"&board="+boardToJson(),
			type: "POST",
			dataType: 'json',
			
			success: function(data){
				var datas = data.solution;
				buildResultTab(datas);		
			},
			error: function(data){
				console.log("resolver error");
				console.log(data);
			}
		
		});
	});
	
	// Result hover
	$('.result').live('mouseenter', function(){
		highlightWord($(this));
	});
	$('.result').live('mouseleave', function(){
		unHighlightWord($(this));
	});
});
