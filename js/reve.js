//fonction qui compte le nombre des éléments
const compterElements = (element) =>{
    let nombreElt = document.querySelectorAll(element);
    return nombreElt.length
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2