// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/typescript

/*
Écrivez une fonction pour convertir un nom en initiales. Ce kata prend strictement deux mots avec un espace entre eux.

La sortie doit être composée de deux majuscules avec un point les séparant.
*/

export function abbrevName(name: string): string {
  return name.split(' ').map(v => v[0].toUpperCase()).join('.');
}

console.log(abbrevName("Sam Harris")); // S.H
