var animal = 0;

function animalCount(distance) {
    if (distance <= 10) {
        animal = distance * 50;
    } else if (distance <= 20) {
        var firstPartAnimals = 10 * 50;
        var remainingDistance = distance - 10;
        var secondPartAnimals = remainingDistance * 100;
        animal = firstPartAnimals + secondPartAnimals;
    } else {
        var firstPartAnimals = 10 * 50;
        var secondPartAnimals = 10 * 100;
        var remainingDistance = distance - 20;
        var thirdPartAnimals = remainingDistance * 300;
        animal = firstPartAnimals + secondPartAnimals + thirdPartAnimals;
    }
    return animal;
}
console.log(animalCount(32));