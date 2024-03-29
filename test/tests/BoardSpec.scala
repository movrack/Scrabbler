package tests

import org.specs2.mutable._
import play.api.test._
import play.api.test.Helpers._

class BoardSpec  extends SpecificationWithJUnit  {

  "The 'Hello world' string" should {
    "contain 11 characters" in {
      "Hello world" must have size(11)
    }
    "start with 'Hello'" in {
      "Hello world" must startWith("Hello")
    }
    "end with 'world'" in {
      "Hello world" must endWith("world")
    }
  }
}