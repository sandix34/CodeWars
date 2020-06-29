/*
Complétez la fonction qui accepte un paramètre de chaîne et inverse chaque mot de la chaîne. Tous les espaces de la chaîne doivent être conservés.
 */

export function reverseWords(str: string): string {
  
  // 1. créez d'abord un tableau avec les mots d'origine
  // 2. parcourir chaque mot et en faire un tableau de caractères
  // 3. inverser le tableau et en faire une chaîne à nouveau, donc c'est encore un mot mais inversé
  // 4. joindre le tableau résultant
  
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); 
// 'ehT kciuq nworb xof spmuj revo eht yzal .god'
