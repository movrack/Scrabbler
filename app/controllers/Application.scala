package controllers

import models.Game
import play.api._
import play.api.mvc._
import play.api.cache.Cache
import play.api.Play.current
import play.api.db.DB

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Scrabbler home"))
  }
  
  def game = Action {
    val game = new Game()
    println(game.bag)
//    DB.withConnection { conn =>
//  		val result
//    }
//    Cache.set("Game", game)
//    for(letter <- game.bag.letter) {
//      println(letter)
//    }
//    Ok(views.html.game(game.board, game.bag, game.carrier))
    Ok(views.html.game(game))
  }
  
}