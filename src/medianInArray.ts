function findMedian(arr: number[]): number {  
    if (arr.length === 0) throw new Error('No items in the array');

    // automatic method of organizing ascending array
    arr.sort((a, b) => a - b);

    // manual method
    // const len = arr.length;

    // for (let i = 0; i < len - 1; i++) {
    //   for (let j = 0; j < len - i - 1; j++) {
    //     if (arr[j] > arr[j + 1]) {
    //       // swap numbers[j] and numbers[j+1]
    //       const temp = arr[j];
    //       arr[j] = arr[j + 1];
    //       arr[j + 1] = temp;
    //     }
    //   }
    // }
    
    const midpoint = Math.floor(arr.length/2);
    const median = arr[midpoint];

    return median;
}

function main() {
    const arr: number[] = [1, 5, 6, 2, 3, 4, 7];
    
    const result = findMedian(arr);

    console.log(result)
}

main();