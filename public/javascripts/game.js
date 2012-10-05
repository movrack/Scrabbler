$(document).ready(function() {
	// Drag
	$('.letter').attr("draggable", true);
	$('.letter').addClass("drag");

	// Drop
	$('.letter').addClass("drop");
	$("#bag").addClass("drop");
	$("#board td").addClass("drop");
	$("#carrier").addClass("drop");



//	// Action DnD
//
//	// //////////////////////////
//	// / DROP
//	// //////////////////////////
//	function tdDropBind() {
//		$('td.drop').on({
//			'dropover' : function(ev, drop, drag) {
//				$(this).addClass('highlightDrop');
//			},
//			'dropout' : function(ev, drop, drag) {
//				$(this).removeClass('highlightDrop');			
//			},
//			'dropon' : function(ev, drop, drag) {
//				$(this).html(drag.element);
//				drag.element.attr("style", "");
//				$(this).removeClass('highlightDrop');
//				$(this).removeClass('drop');
//				$(this).off();
//			}
//		});
//	}
//	tdDropBind();
//
//	$('#realPortePiece, #realSac ').on({
//		"dropover" : function(ev, drop, drag) {
//			$(this).addClass('highlightDrop');
//		},
//		"dropout" : function(ev, drop, drag) {
//			$(this).removeClass('highlightDrop');
//		}
//	});
//
//	$('#realPortePiece').on({
//		'dropon' : function(ev, drop, drag) {	
//			$(this).removeClass('highlightDrop');		
//			$(this).append(drag.element);
//			drag.element.attr("style", "");
//		}
//	});
//
//	$('#realSac ').on({
//		'dropon' : function(ev, drop, drag) {
//			$(this).removeClass('highlightDrop');
//			$(this).prepend(drag.element);
//			drag.element.attr("style", "");
//		}
//	});
//
//
//	// //////////////////////////
//	// / DRAG
//	// //////////////////////////
//	var dragBind = $('.drag').on({
//		'draginit' : function(ev, drag) {
//		    var parentTag = $(this).parent();
//
//			if(parentTag.is("td")) {
//				parentTag.addClass('drop');
//				tdDropBind();
//			}
//		},
//		'dragmove' : function(ev, drag) {
//			$(this).addClass('highlightDrag');
//			var parentTag = $(this).parent();
//			if(parentTag.hasClass("caseCentre")){
//				parentTag.html('<icon class="icon-asterisk"></icon>');
//			}
//		},
//		'dragend' : function(ev, drag) {
//			$(this).removeClass('highlightDrag');
//
//		}
//	});
//
//
//
//	$('#searchButton').click(function(){
//		var children = $("#realPortePiece").children().text()
//
//	});
});