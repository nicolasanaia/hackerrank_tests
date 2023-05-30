process.stdin.resume();
process.stdin.setEncoding('utf-8');

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    let max: number = 0;
    let min: number = 0;

    arr.sort();

    for (const index in arr) {
        if (parseInt(index) === 4) {
            max += arr[index];

            continue;
        }
        if (parseInt(index) === 0) {
            min += arr[index]

            continue;
        }

        max += arr[index];
        min += arr[index];
    }

    process.stdout.write(`${min} ${max}`)
}

function main() {
    const arr: number[] = [1, 5, 5, 5, 5];
    miniMaxSum(arr);
}

main();
