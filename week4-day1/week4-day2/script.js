function Counter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function reset() {
        count = 0;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        reset,
        getCount
    };
}

const counter = Counter();

counter.increment();
counter.increment();
console.log("Value of count after increment")

console.log(counter.getCount()); 

counter.decrement();
console.log("value of count after decrement");

console.log(counter.getCount()); 

console.log("reset value");
counter.reset();
console.log(counter.getCount());
