package controllers

import models._
import play.api._
import play.api.mvc._
import play.api.cache.Cache
import play.api.Play.current
import play.api.db.DB
import scala.collection.parallel.immutable.ParSeq
import play.api.cache.Cached

object Application extends Controller {
	val DICTIONARY = "public/dictionnary.txt"
	val linesFromDic:ParSeq[String] = Dictionary.read(DICTIONARY)
  
  def index = Action {
    Ok(views.html.index("Scrabbler home"))
  }
  
  def game = Action {
    val game = new Game()
    println(game.bag)
    Ok(views.html.game(game))
  }

  	def dictionnary = Cached("dictionnary") {
  	  Action {
	  	  Ok(views.html.dictionnary(linesFromDic.toList))
	  	}
	}
  	
  def find(word: String) = Action {
		println("> Searching for word : " + word + "\n")

		// Dictionary
//		println("Dictionary :\n\t" + linesFromDic)

		// Combinaison
		val comb = Dictionary.combinaisons(word).par
//		println("Words :\n\t" + comb)
		
		// Intersection
		val common = linesFromDic intersect comb
		println("Common :\n\t" + common)
		println("\n> End searching")
		Ok("resultat " + common)
	}
}