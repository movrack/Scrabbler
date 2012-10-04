package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Scrabbler home"))
  }
  
  def board = Action {
    Ok(views.html.board("Scrabbler home"))
  }
}