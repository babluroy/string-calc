
export class StringCalculator {

    add(numbers: string):number {
        if (numbers === "") return 0;

        let delimiter = /[\n,]/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = new RegExp(`[${parts[0].slice(2)}]`);
            numbers = parts[1];
        }

        const numArray = numbers.split(delimiter).map(num => Number(num));
        return numArray.reduce((acc, curr) => acc + curr, 0);

    }

}