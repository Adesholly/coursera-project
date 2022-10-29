array = [1, 2, 3, 4, 5]

function findSumArr(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == weight) return [arr[i], arr[j]]
    }
  }
  return -1
}

function findSumArrRectored(arr, weight) {
  const hashTable = {}
  for (let i = 0; i < arr.length; i++) {
    const diff = weight - arr[i]

    if (hashTable[arr[i]] != undefined) {
      return [i, hashTable[diff]]
    } else {
      hashTable[diff] = i
    }
  }
  return -1
}


const obj = { 1: 23 }

console.log(obj[1])
console.log(findSumArr(array, 7))
console.log(findSumArrRectored(array, 9))


