function fizzBuzz(n: number): void {
    let start: number = 1;

    do {
        let fizzBuzz = '';

        if (start % 3 === 0) fizzBuzz += 'Fizz';
        if (start % 5 === 0) fizzBuzz += 'Buzz';
        if (fizzBuzz === '') {
            console.log(start);
        } else {
            console.log(fizzBuzz);
        }
        
        start++;
    }
    while (start <= n);
}

function main() {
    const n: number = 15;

    fizzBuzz(n);
}

main();