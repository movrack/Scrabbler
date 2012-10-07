package models

class Game() {
	val gameLettersDefinition = Map(// "letter" -> (points, quantity)
	    'A' -> (1, 9),	'B' -> (3, 2),	'C' -> (3, 2),	'D' -> (2, 3),
	    'E' -> (1, 15),	'F' -> (4, 2),	'G' -> (2, 2),	'H' -> (4, 2),
	    'I' -> (1, 8),	'J' -> (8, 1),	'K' -> (10, 1),	'L' -> (1, 5),
	    'M' -> (2, 4),	'N' -> (1, 6),	'O' -> (1, 6),	'P' -> (3, 2),
	    'Q' -> (8, 1),	'R' -> (1, 6),	'S' -> (1, 6),	'T' -> (1, 6),
	    'U' -> (1, 6),	'V' -> (4, 2),	'W' -> (10, 1),	'X' -> (10, 1),
	    'Y' -> (10, 1),	'Z' -> (10, 1),	'*' -> (0, 2)
	)	
	
	
	val board = new Board()
	val bag = new Bag(this.lettersToList(gameLettersDefinition))
	val carrier = new Carrier()
	
	
	private def lettersToList(letters:Map[Char, (Int, Int)]):List[Letter] = { 	
	  var resultList:List[Letter] = Nil
	  
	  for (l <- letters) {
		  resultList = resultList ++ List.tabulate(l._2._2)(x => new Letter(l._1, l._2._1))
	  }
	  resultList.sortWith((x, y) => (x compareTo y))
    }
	

	
}