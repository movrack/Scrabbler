package models

import models._

case class Board() {
	val matrice = Array.ofDim[Letter](15, 15)
	
	def setCase(line:Char, column:Int, letter:Char):Boolean = {
	  false
	}
	
	
}

case object Board{
    def find(word:String): (Char, Int, Int, Char) = {
        var result = ('H', 8, countWord(word), 'h')
        result
    }
    
	def countWord(word:String):Int = {
	  var sum = 0;
	  for(char <- word){
	    sum += Game.letterToPoint(char)
	  }
	  println(sum)
	  sum
	}
}

