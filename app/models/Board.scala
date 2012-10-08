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
	    var sum: Int = 0
	    var doubleWord: Int = 1
	    var tripleWord: Int = 1
	    var i: Int = 0
	    for(char <- word){
	      var letterPoints = Game.letterToPoint(char);
	      
	      if(isCaseDoubleLetter(position.getOffsetPosition(i))){
	        letterPoints *= 2
	      }
	      if(isCaseDoubleLetter(position.getOffsetPosition(i))){
	        letterPoints *= 3
	      }
	      if(isCaseDoubleWord(position.getOffsetPosition(i))){
	        doubleWord += 1
	      }
	      if(isCaseTripleWord(position.getOffsetPosition(i))){
	        tripleWord += 1
	      }
	      sum += Game.letterToPoint(char)
	      i+=1
	    }
	    sum *= doubleWord * tripleWord
	    sum
	}
	
	def isCaseDoubleLetter(position:BoardPosition): Boolean = {
	  false
	}
	
	def isCaseDoubleTripel(position:BoardPosition): Boolean = {
	  false
	}
	
	def isCaseDoubleWord(position:BoardPosition): Boolean = {
	  false
	}
	
	def isCaseTripleWord(position:BoardPosition): Boolean = {
	  false
	}
}

