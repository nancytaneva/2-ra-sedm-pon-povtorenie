//задача 1:
// получаваме входни данни и връщаме команди
// 1 - стена    - Go Sideway 
// 2 - стол     - Jump
// 3 - нищо     - Forward
// 0 - нищо

const HIT_COEFFICIENT       = 5;
const MAX_NUMBER_OF_HITS    = 4;

var isRobotTurnOn           = true;
var numberOfAvailableHits   = MAX_NUMBER_OF_HITS;

while(isRobotTurnOn) {

    const objectInFrontOfMe = prompt("Какъв обект има пред мен?");

    if(objectInFrontOfMe == 1) {
        alert("Go Sideway");
    }
    if(objectInFrontOfMe == 2) {
        alert("Jump");
    }
    if(objectInFrontOfMe == 3) {
        alert("Forward");
    }
    if(objectInFrontOfMe == 0) {
        isRobotTurnOn = false;
        alert("Robot turn off");
    }

    const numberOfEnvPixels     = prompt("засечени пиксели от заобикалящата среда");
    const isMouseDetected       = numberOfEnvPixels % 2 == 0;
    const isBatteryFull         = numberOfAvailableHits > 0;
    
   
    if(!isBatteryFull) {
        alert("Свърши ми тока - отивам да зареждам");
        do {
            const phaseCoefficient = Math.floor(Math.random()*(1000 - 1) + 1);
            const zeroCoefficient = Math.floor(Math.random()*(1000 - 1) + 1);

            if(phaseCoefficient > zeroCoefficient) {
                numberOfAvailableHits = MAX_NUMBER_OF_HITS;
            }

            if(phaseCoefficient < zeroCoefficient) {
            isRobotTurnOn = false;
            }

        }while(phaseCoefficient == zeroCoefficient)
    }
// TODO: да не забравя да извадя направения удар от numberOfAvailableHits

    //задача 3:
    const randomGeneratedNumber = Math.ceil(Math.random()*(10 - 1) + 1); //от 1 до 10
    const isHitSuccessful       = randomGeneratedNumber !=HIT_COEFFICIENT;

    const isHitPossible = isMouseDetected && isBatteryFull && isHitSuccessful;

    if(isHitPossible) {
        alert("Успешно нанесохте удар");
        numberOfAvailableHits = numberOfAvailableHits - 1;

    //     var upperBound = 10;
    //     while(upperBound > 0) {
    //         alert(upperBound);

    //         if(upperBound % 2 == 0) {
    //         alert(`I am a Robottttt ${upperBound}`);
    //         }
    //     upperBound = upperBound - 1;
    // }

    // Цикъл с Брояч:
    for(var upperBound = 10; upperBound > 0; upperBound--)
        alert(upperBound);

        if(upperBound % 2 == 0) {
        alert(`I am a Robottttt ${upperBound}`);
        }
    }


}

