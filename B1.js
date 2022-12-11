function filterRange(arr1, a, b){
    let arr2 = arr1.filter((item) => {
        return item >= a && item <= b
    })
    return arr2;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log( arr );