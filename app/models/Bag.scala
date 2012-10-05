package models

class Bag(l: List[Letter]) {
	  
	var letters : List[Letter] = l
	
    override def toString = {
      this.letters.toString
    }


}