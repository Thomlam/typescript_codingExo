function filterEvenNumbers(numbers:number[]) {
    const evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);
const numbers2 = [10,20,30,40,50,60,66,70,33,100];
const evenNumbers2 = filterEvenNumbers(numbers2);
console.log(evenNumbers2);
