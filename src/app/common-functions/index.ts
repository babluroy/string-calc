
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
       
        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
          throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
        }
    
        return numArray.reduce((acc, curr) => acc + curr, 0);

    }

}