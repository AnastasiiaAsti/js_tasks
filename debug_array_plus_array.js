// I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements.I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//     return arr1+arr2
// }


function arrayPlusArray(arr1, arr2) {
    let sum_arr1 = 0
    let sum_arr2 = 0
    for(i=0; i<arr1.length; i++ ){
      sum_arr1 += arr1[i]
    }
    for(i=0; i<arr2.length; i++ ){
      sum_arr2 += arr2[i]
    }
    return sum_arr1 + sum_arr2; //something went wrong
}
  
function arrayPlusArray2(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
  }