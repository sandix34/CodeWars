/**
 * Un isogramme est un mot qui n'a pas de lettres répétitives, consécutives ou non. Implémentez une fonction qui détermine si une 
 * chaîne contenant uniquement des lettres est un isogramme. Supposons que la chaîne vide est un isogramme. Ignorer la casse des 
 * lettres.
 * 
 * isIsogram( "Dermatoglyphics" ) == true
 * isIsogram( "aba" ) == false // -- les mêmes caractères ne peuvent pas être adjacents
 * isIsogram("moOse") == false // -- les mêmes caractères peuvent ne pas être identiques
 * isIsogram("") == true // -- une chaîne vide est un isogramme valide
 */

function isIsogram(str){
    //divise la chaîne en un tableau de chaînes et retourne la chaîne de caractères courante en majuscule pour ignorer la casse
    var arr = str.split('').map(function(el) {
      return el.toUpperCase();
    }); 
    console.log(arr);
    
    //recherhe des lettres doublons
    return arr.every(function(el) {
      return arr.indexOf(el) == arr.lastIndexOf(el);
    });
  }
  
  /*
  * **********
  * test
  * **********
  */
  //console.log(isIsogram("Dermatoglyphics")); // true --> OK
  //console.log(isIsogram("isogram")); // true --> OK
  //console.log(isIsogram("aba")); // false --> OK
  //console.log(isIsogram("moOse")); // false --> OK
  //console.log(isIsogram("isIsogram")); // false  -->OK
  //console.log(isIsogram("")); // true --> OK