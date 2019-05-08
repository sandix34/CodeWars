/*
Le premier tableau en entrée contient les réponses correctes à un examen, comme ["a", "a", "b", "d"]. Le second est un tableau de "réponses" et contient les réponses des étudiants.

Les deux tableaux ne sont pas vides et ont la même longueur. Renvoie le score de ce tableau de réponses en donnant +4 pour chaque réponse correcte, -1 pour chaque réponse incorrecte et +0 pour chaque réponse vide (chaîne vide).

Si le score <0, renvoyer 0.

Par exemple:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

const checkExam = (answers, responses) => {
    const score = responses.reduce((accumulator, currentValue, index) => {
      //si la valeur courrante est nulle on retourne l'accumulateur  
      if (!currentValue) return accumulator
      //si la valeur courrante et égale à la valeur de l'autre tableau à l'index courrant on ajoute 4
      if (currentValue === answers[index]) return accumulator + 4
      // si la valeur courrante et diférente à la valeur de l'autre tableau à l'index courrant on enlève 1
      if (currentValue !== answers[index]) return accumulator - 1
      
      return accumulator
    }, 0)
  
    return score > 0 ? score : 0
  }




    console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));// 6
    console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));// 7
    console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));// 16
    console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));// 0  