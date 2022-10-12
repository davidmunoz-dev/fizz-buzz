/*
    Dans un premier temps j'ai assigné à deux constantes l'entier de départ (START) et l'entier d'arrivé (THRESHOLD)

    J'ai ensuite creer une fonction fuzz qui boucle sur un index de l'entier de départ jusqu'à l'entier d'arrivé
    Pour chaque itération de cette bouble j'assigne à deux variables:
     - divisibleByThree lorsque le modulo de l'index d'itération est divisble par 3, donc égal à 0, j'assigne true
     - divisibleByFive lorsque le modulo de l'index d'itération est divisble par 5, donc égal à 0, j'assigne true
     J'ai préféré assigner la valeur à une variable pour plus de lisibilité

     Vérifier avant toute autre condition que les deux variables divisibleByFive et divisibleByThree sont divisibles afin d'afficher 'fizzbuzz',
          celle ci doit être situé en première condition puisque les 'else if' suivant reprennent chaque opération du premier 'if',
            Si celle ci était situé en fin de logique conditionnel, on ne passerait jamais dedans
     Sinon, vérifier la variable divisibleByFive et retourner 'buzz'
     Sinon, vérifier la variable divisibleByThree et retourner 'fizz'
     Sinon retourner la valeur de l'index d'itération
 */

const THRESHOLD = 50;
const START = 1;

const fuzz = () => {
    for (let i = START; i <= THRESHOLD; i++) {
        const divisibleByThree = (i % 3 === 0);
        const divisibleByFive = (i % 5 === 0);

        if (divisibleByFive && divisibleByThree) {
            console.log('fizzbuzz');
        } else if (divisibleByFive) {
            console.log('buzz');
        } else if (divisibleByThree) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

fuzz();
