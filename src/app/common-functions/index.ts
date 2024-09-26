
export class StringCalculator {

    /**
    * Adds the numbers represented as a string.
    * @param {string} numbers - A string containing numbers to be added,
    * separated by commas, newlines, or custom delimiters.
    * @returns {number} The sum of the numbers.
    * @throws {Error} If any negative numbers are present in the input.
    */
    add(numbers: string): number {
        if (numbers === "") return 0;

        let delimiter = /[\n,]/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            delimiter = new RegExp(`[${parts[0].slice(2)}]`);
            numbers = parts[1];
        }

        const numArray = numbers.split(delimiter).map(num => Number(num));

        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
        }

        return numArray.reduce((acc, curr) => acc + curr, 0);

    }

}