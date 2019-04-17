/** 
C'est la fin de l'année scolaire, le moment fatidique de ton bulletin scolaire. Les moyennes doivent être calculées. Tous les étudiants viennent à vous et vous prient de calculer leur moyenne pour eux. Facile ! Vous avez juste besoin d'écrire un script.

Retour à la moyenne du tableau donné arrondi vers le bas à son entier le plus proche.

Le tableau ne sera jamais vide.
*/

function getAverage(marks){

    const sum = marks.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
      });

    const average = sum / marks.length;

    return Math.floor(average);
    
}
  // Tests

console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1