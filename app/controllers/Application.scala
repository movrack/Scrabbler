package controllers

import play.api._
import play.api.mvc._
import models.Game

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Scrabbler home"))
  }
  
  def game = Action {
    val game = new Game()
    println(game.bag)
//    for(letter <- game.bag.letter) {
//      println(letter)
//    }
//    Ok(views.html.game(game.board, game.bag, game.carrier))
    Ok(views.html.game(game))
  }
  
}