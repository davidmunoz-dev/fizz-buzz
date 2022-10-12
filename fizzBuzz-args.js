const ARGS_LENGTH = 2;

const formatArgs = (inputArgs) => {
    const integerArgs = [];

    for (const [index, argument] of inputArgs.entries()) {
        const integer = parseInt(argument);
        if (isNaN(integer)) {
            console.error(`Invalid argument at position ${index} : Argument should be an integer`);
            return false;
        }
        integerArgs.push(integer);
    }
    if (integerArgs[0] >= integerArgs[1]) {
        console.error(`Invalid arguments: Starting position can not be greater or equal to threshold`);
        return false;
    }
    return integerArgs;
}

const checkArgs = () => {
    const inputArgs = process.argv.slice(2);

    if (inputArgs.length != ARGS_LENGTH) {
        console.error(`Invalid argument: Only ${ARGS_LENGTH} arguments should be set, currently ${inputArgs.length} arguments are set`);
        return false;
    }
    return inputArgs;
};

const loopFizzBuzz = (start, threshold) => {
    for (let i = start; i <= threshold; i++) {
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
};

const inputArgs = checkArgs();
if (inputArgs) {
    const formattedArgs = formatArgs(inputArgs);
    loopFizzBuzz(formattedArgs[0], formattedArgs[1]);
}
