package models

import models._

case class Board() {
	val matrice = Array.ofDim[Letter](15, 15)
	
	def setCase(line:Char, column:Int, letter:Char):Boolean = {
	  false
	}
	
	
}

case object Board{
  

   
    def find(word:String): (BoardPosition, Int) = {
	    var position: BoardPosition = new BoardPosition('H', 8, 'h')
	    var points: Int = countWordPoints(word, position)
        var result = (position, points)
        result
    }
    
	def countWordPoints(word:String, position:BoardPosition):Int = {
	    var sum = 0
	    var doubleWord = 0
	    var tripleWord = 0
	    for(char <- word){
	      sum += Game.letterToPoint(char)
	    }
	    sum
	}
}

