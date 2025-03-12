const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        if (cache.has(args)) {
            return cache.get(args);
        }
        const result = fn(...args);
        cache.set(args, result);
        return result;
    }
}

const memoizedAdd = memoize((a, b) => a + b);

console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (cached result)
console.log(memoizedAdd(2, 3)); // 5

