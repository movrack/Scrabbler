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
        var result = ('A', 1, 1, 'h')
        result
    }
}
