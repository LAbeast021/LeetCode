// var twoSum = function(nums, target) {
//     let output = []
//     for (i = 0 ; i < nums.length ; i++){
//         if (nums.indexOf(target - nums[i]) >= 0 && nums.indexOf(target - nums[i]) != i ){
//             output.push(i)
//             output.push(nums.indexOf(target - nums[i]))
//             output.sort()
//             return output
//         }
//     }
    
// };

// console.log(twoSum([3,2,3] , 6))
// /============================================

// var isPalindrome = function(x) {
//     let tik = true
//     x = x.toString()
//     for (i = 0 ; i < x.length ; i++) {
//         if (x[i] != (x[(x.length - 1 - i)])){
//             tik = false
//         }
//     }
//     return tik
    
// };

// console.log(isPalindrome(121))
// ======================================

// var addTwoNumbers = function(l1, l2) {
//     let currentNode1 = l1
//     let currentNode2 = l2

//     let str1 = ""
//     let str2 = ""
//     while (currentNode1.next != null){
//         str1 += currentNode1.val
//         currentNode1 = currentNode1.next
//     }
//     str1 += currentNode1.val

//     while (currentNode2.next != null){
//         str2 += currentNode2.val
//         currentNode2 = currentNode2.next
//     }
//     str2 += currentNode2.val

//     let reversedStr1 = str1.split('').reverse().join('');
//     let reversedStr2 = str2.split('').reverse().join('');

//     sum = Number(reversedStr1) + Number(reversedStr2)
//     sum = sum.toString(),split('').reverse().join()

//     let i = 0
//     while (l1.next != null){
//         l1.val = sum[i]
//         l1 = l1.next
//         i++
//     }
// };
/////////////////===================================///////////////////////////////////

// var removeDuplicates = function(nums) {
//     let lastNumber, mainIndex , dupsIndex ;
//     lastNumber = nums[0]
//     for(i=1 ; i < nums.length ; i++ ){
//         if(nums[i] == lastNumber){
//             mainIndex = i-1
//             dupsIndex = i
//             nums.splice(dupsIndex , 1)
//             i--
//         }
//         else {
//             lastNumber = nums[i]
//         }

//     }
//     console.log(nums)
 
// };

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])

// optimal solution is this 
// var removeDuplicates = function(nums) {
//     let i = 0;

//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// };
// var removeDuplicates = function (nums) {
//     let k = 1;
  
  
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] !== nums[i - 1]) {
//         nums[k] = nums[i];
//         k++;
//       }
//     }
  
//     return k;
//   };

// ==============================================================
