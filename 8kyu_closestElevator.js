/**
 Pour 2 ascenseurs (nommés "gauche" et "droite") dans un bâtiment de 3 étages (numérotés de 0 à 2), écrivez un ascenseur fonctionnel acceptant 3 arguments (dans l'ordre):

 left - L'étage actuel de l'ascenseur gauche
 right - L'étage actuel de l'ascenseur de droite
 call - le sol appelé, c'est-à-dire le sol que vous souhaitez atteindre

 Il doit renvoyer le nom de l'ascenseur le plus proche de l'étage appelé ("left" / "right").
 Dans le cas où les deux ascenseurs sont équidistants du sol appelé, choisissez l'ascenseur à droite.
 Vous pouvez supposer que les entrées seront toujours des entiers valides dans la plage fermé-ouvert [0, 3).
*/

elevator = (left, right, call) => {

   return Math.abs(left - call) < Math.abs(right - call) ? "left" : "right"
}

console.log(elevator(0,1,0));//left
console.log(elevator(0,1,1));//right
console.log(elevator(0,1,2));//right
console.log(elevator(0,0,0));//right
console.log(elevator(0,2,1));//right




    