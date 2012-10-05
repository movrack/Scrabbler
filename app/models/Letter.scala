package models

class Letter(char: Char, value: Int) {
  val character:Char = char
  val points:Int = value 
  
  override def toString = {
    char.toString
  }
  
  def compareTo (x:Letter): Boolean = {
    this.character < x.character
  }
}

