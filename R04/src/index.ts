/* Callable */

interface ShouldReturnString {
    (): string
}

function itReturnsSomeStringValue(): string {
    return 'Hello';
}

const delegate: ShouldReturnString = itReturnsSomeStringValue;
const valueToGetFromDelegate = delegate(); // valueToGetFromDelegate is inferred as a string
console.log(valueToGetFromDelegate);