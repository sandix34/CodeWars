/**
 Vous écrivez du code pour contrôler les feux de circulation de votre ville. Vous avez besoin d’une fonction pour gérer chaque changement de green, à yellow, à red, puis à green à nouveau.

 Terminez la fonction qui prend une chaîne en tant qu'argument représentant l'état actuel de la lumière et renvoie une chaîne représentant l'état de la lumière.

 Par exemple, update_light('green')devrait revenir 'yellow'.
 */
  updateLight = current => {

   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'
    
 }
 
console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));


 