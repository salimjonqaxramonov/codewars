// function leastLarger(arr, index) {
//   const target = arr[index];
//   let minLargerValue = Infinity;
//   let resultIndex = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > target && arr[i] < minLargerValue) {
//       minLargerValue = arr[i];
//       resultIndex = i;
//     }
//   }

//   return resultIndex;
// }

// console.log(leastLarger([4, 1, 3, 5, 6], 0)); // 3

// function stalinSort(arr) {
//   if (arr.length === 0) return;

//   let i = 0;

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] >= arr[i]) {
//       i++;
//       arr[i] = arr[j];
//     } else {
//       console.log("Расстрелять!");
//     }
//   }
//   arr.length = i + 1;
// }

// console.log(stalinSort([2,3,4]));
