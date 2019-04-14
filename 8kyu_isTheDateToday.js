/**
  Ecrivez une fonction simple qui prend en paramètre un objet de date et renvoie une valeur booléenne indiquant si la date est aujourd’hui ou non.

    Assurez-vous que votre fonction ne renvoie pas de faux positif en vérifiant simplement le jour.
 */

function isToday(date) {
    let today = new Date();
    if (date.toDateString() == today.toDateString()) {
        return(true);    
    }else{
        return(false);   
    }
  }

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);


/**
*isToday(new Date()), true;
*isToday(tomorrow), false;
*isToday(yesterday), false;
 */