Scrabbler
=========

Résolveur de Scrabble sur les méthodes de parrallélisation.

Fonctionnement générale : 
* Trouver toutes les combinaisons de lettres possible à partir des lettres du porte lettres.
* Réaliser une intersection de cet ensemble de combinaisons avec l'ensemble des mots d'un dictionnaire donné.
  Cette interesction ce fait parrallèlement avec les collections parrallèles existantes dans le langage Scala.
* Trouver toutes les mots pouvant être placé sur le plateau grâce aux acteurs disponible dans le langage Scala.
  Chaque acteur cherches les possibilités sur une colonne ou sur une ligne et calcul des points pour les mots pouvant être placé
* Tri sur les collections parallèle sur base des points de chaques mot.

Tester l'application
--------------------
L'application est hébergée sur le service cloud Heroku : http://scrabbler-manudev.herokuapp.com/

Etat actuelle
-------------
Fait : 
* Recherche des combinaisons
* Intersection avec les mots du dictionnaire. 
* Dirctionnaire créé sur bases des mots venant de "http://www.motsduscrabble.com/" ~ environ 60 000 mots
* Interface graphique html 5 / CSS 3

A faire : 
* Recherche de placement sur le plateau
* Tri en fonction des points
* Enregistrement de parties
* Ajout les mots de plus de 7 lettres de "http://jph.durand.free.fr/scrabble.htm" dans le dictionnaire