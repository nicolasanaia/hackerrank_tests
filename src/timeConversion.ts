function timeConversion(s: string): string {
    const [hour, minutes, secondsPeriod] = s.split(':', 3);
    const seconds = secondsPeriod.slice(0, 2);
    const period = secondsPeriod.slice(2);

    if (period === 'AM') {
        if (parseInt(hour) === 12) return `00:${minutes}:${seconds}`;
        const currentHour = s.split('AM', 1);

        return currentHour[0];
    }

    if (parseInt(hour) === 12) return `${hour}:${minutes}:${seconds}`;
    
    let convertedHour = parseInt(hour) + 12;

    const convertedTime = `${convertedHour}:${minutes}:${seconds}`

    return convertedTime;
}

function main(): void {
    const s: string = '12:01:20PM';

    const result = timeConversion(s);

    process.stdout.write(result + '\n');
}

main();