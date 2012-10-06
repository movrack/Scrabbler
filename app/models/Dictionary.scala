package models
//import scala.collection.parallel._
import java.io._

object Dictionary {
	def read(dictionnaire: String) = {
		def read(buf: BufferedReader, acc: List[String]): List[String] = buf.readLine match {
			case null => acc
			case s => read(buf, s :: acc)
		}
		read(new BufferedReader(new FileReader(dictionnaire)), Nil).map(_.toLowerCase()).par
		// removeAccent
		// removeDuplicate
	}
	
	
	def combinaisons(word:String):List[String] = {
		
		var combin:List[String] = Nil
		for (i <- 0 to word.length - 2) {
			val iterators = word.toLowerCase().combinations(word.length - i).map(_.permutations)
			for (it <- iterators; e <- it) {
				combin = combin:+e
			}
		}
//		combin.removeDuplicates
		combin
	}
	
	
}