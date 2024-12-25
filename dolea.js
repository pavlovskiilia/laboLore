// Assuming this.filter is an object with some keys
const thisObject = {
    filter: {
        a: 1,
        b: 2,
        c: 1
    }
};

function keys(obj) {
    return Object.keys(obj);
}

function getUniqueKeys() {
    return new Set(keys(thisObject.filter));
}

console.log(getUniqueKeys()); 
// Output: Set { 'a', 'b', 'c' }
// Note: 'c' appears only once in the Set due to its uniqueness.
