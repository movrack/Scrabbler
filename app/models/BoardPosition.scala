package models

class BoardPosition(l:Char, c:Int, d:Char) {
	val line:Char = l
	val column:Int = c
	val direction:Char = d
	
	def getOffsetPosition(offset:Int) = {
	  if (direction == 'h') new BoardPosition((line+offset).toChar, column, direction)
	  else new BoardPosition(line, column + offset, direction)
	}
}