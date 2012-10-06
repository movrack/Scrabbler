package controllers

import scala.collection.parallel.immutable.ParSeq

import models._
import play.api._
import play.api.Play.current
import play.api.cache.Cached
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json
import play.api.libs.json.Json._
import play.api.mvc._

object Application extends Controller {
  
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
	  	  Ok(views.html.dictionnary(Dictionary.getWords.toList))
	  	}
	}
  	
  def find(word: String, board:String) = Action {
		val solutions = Resolveur.resolve(word, board)
		val jsResult = Ok("{hello}").withHeaders(
		        "Content-Type" -> "application/json"
	        ) 
		jsResult
		
	}
  	
  val findForm = Form(
    tuple(
        "word" -> text,
  		"board" -> text
  	)
  )
  
  def findp = Action { implicit request =>
    findForm.bindFromRequest.fold(
        formWithErrors => BadRequest("{\"result\": \"error\"}"),
        {
            case (word, board) => {
                val solutions:String = Resolveur.resolve(word, board)
                
            	Ok("{\"result\": \"succes\", \"solution\":"+solutions+"}")
            }
        }
    )
  }
}