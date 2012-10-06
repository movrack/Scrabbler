package models

import scala.collection.parallel.immutable.ParSeq

object Resolveur {

	
	def resolve(word:String, board:String): Map[String,  (Char, Int, Int)] = {
		println("> Searching for word : " + word + "\n")
	    var solutions : Map[String, (Char, Int, Int)] = Map()
	    
	
		// Combinaison
		val combinaisons = Dictionary.combinaisons(word).par
			
		// Intersection
		val commonWords = Dictionary.getWords intersect combinaisons
		println("Common :\n\t" + commonWords)
		println("\n> End searching")
		
		for(word <- commonWords){
		    var resultWord = Board.find(word)
		    solutions +=  word -> resultWord
		}
	    solutions
	}
}