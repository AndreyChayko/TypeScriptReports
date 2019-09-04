/* Overloading functions */

function padding(all: number): object;
function padding(topAndBottom: number, leftAndRight: number): object;
function padding(top: number, right: number, bottom: number, left: number): object;
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number): object {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}

console.log(padding(1)); // Okay: all
console.log(padding(1,2)); // Okay: topAndBottom, leftAndRight
console.log(padding(1,1, 2,2)); // Okay: top, right, bottom, left

// padding(1,1,1); // Error: Not a part of the available overloads