export function mergeTwo(arr1, arr2) {
  let merged = []
  let index1 = 0
  let index2 = 0
  let current = 0

  while (current < arr1.length + arr2.length) {
    let unmerged1 = arr1[index1]
    let unmerged2 = arr2[index2]

    // if next comes from arr1
    if (unmerged1 < unmerged2) {
      merged[current] = unmerged1
      index1++

      // if next comes from arr2
    } else {
      merged[current] = unmerged2
      index2++
    }
    current++
  }

  return merged
}
