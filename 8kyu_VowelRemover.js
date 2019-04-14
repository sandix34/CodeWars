// Créez une fonction appelée shortcut pour supprimer toutes les voyelles minuscules d'une chaîne donnée.
// exemple : shortcut("codewars") // --> cdwrs

function shortcut(string){
  
    // divise la chaîne en tableau de chaîne
    let stringArray = string.split('')
 
    //La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition et la méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau
    return stringArray.filter(el =>{
        return el !== "a"&& el !== "e" 
        && el !== "i" && el !== "o" && el !== "u"
        }).join("")
    }
 
 
 
 console.log(shortcut('hello')); // == 'hll'
 console.log(shortcut('how are you today?')); // == 'hw r y tdy?'
 console.log(shortcut('complain')); // == 'cmpln'
 console.log(shortcut('never')); // == 'nvr'