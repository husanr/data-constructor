
function find(arr: number[], num: number): number {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return i
    }
  }
  return -1
}

const ind = find([1, 3, 5, 16, 20, 50, 100], 3)
console.log(ind);

export {}