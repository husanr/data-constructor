// 二分法
function binarySearch(arr: number[], num: number): number {
  let leftInd = 0
  let rightInd = arr.length - 1

  while(leftInd <= rightInd) {
    const midInd = Math.floor((leftInd + rightInd) / 2)
    if(arr[midInd] === num) {
      return midInd
    } else if(arr[midInd] > num) {
      rightInd = midInd - 1
    } else {
      leftInd = midInd + 1
    }
  }
  return -1
}

const ind = binarySearch([1, 3, 5, 7, 11], 5)
console.log(ind);

export {}