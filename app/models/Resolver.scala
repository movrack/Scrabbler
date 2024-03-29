package models

import scala.collection.parallel.immutable.ParSeq

object Resolveur {

	
	def resolve(word:String, board:String):String = {
		println("> Searching for word : " + word + "\n")
	    var solutions : Map[String, (BoardPosition, Int)] = Map()
	    
	
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
		
		solutionMapToJsonString(solutions)
		
	}
	

	
	def solutionMapToJsonString(solutions: Map[String, (BoardPosition, Int)]):String = {
	    var js = ""
        if(solutions isEmpty ){
            js = "\"empty\""
        } else {
            js += "{"
            for(word <- solutions){
                js += "\""+word._1+"\":{"
                js += "\"l\":\""+word._2._1.line+"\","
                js += "\"c\":\""+word._2._1.column+"\","
                js += "\"d\":\""+word._2._1.direction+"\","
                js += "\"p\":\""+word._2._2+"\""
                js += "},"
            }
            js = js dropRight 1 
            js +="}"
    	}
	    js
	}
}