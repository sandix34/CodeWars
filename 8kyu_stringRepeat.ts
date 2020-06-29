// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript

// Écrivez une fonction appelée repeatString qui répète la chaîne donnée, comptez exactement le nombre de fois.

export function repeatStr (n:number, s:String):String {
  return s.repeat(n);
}

console.log(repeatStr(5, "Hello")); // HelloHelloHelloHelloHello
