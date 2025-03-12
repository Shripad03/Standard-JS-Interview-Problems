const moveallzeroesend = (arr) =>{
    const nonZeroes = arr.filter(ele => ele > 0);
    const zeros = arr.filter(ele => ele === 0 );

    return [...nonZeroes, ...zeros];
}

arr1 = [1,0,5,7,0,3,8,9,0]
const moveZeroesInSameOrder = moveallzeroesend(arr1);
console.log(moveZeroesInSameOrder)