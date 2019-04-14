/** 
 * Ecrivez un programme qui trouve la somme de chaque nombre de 1 à num. 
 * Le nombre sera toujours un entier positif supérieur à 0
 * 
 * summation(2) -> 3
 * 1 + 2
 * 
 * summation(8) -> 36
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 * 
 */

const summation = function (num) {

    let somme = 0;
    
    for (var i=1; i <= num; i++ ) {
  
      let compteur = i;
    
      somme = somme + compteur;
      console.log(somme);  
    }
      return somme;
    }
  
  console.log(summation(18));
   