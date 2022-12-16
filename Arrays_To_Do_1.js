// PROBLEM #1
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr, val) {
    var Front = arr
    Front.push(val)
    x = Front[0]
    Front[0] = Front[Front.length-1]
    Front[Front.length-1]=x
    console.log(Front)
}

pushFront([5,7,2,3], 8)
pushFront([99], 7)

// PROBLEM #2
// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
function popFront(arr){
    var Back = arr
    Back.shift()
    console.log(Back)
}

popFront([0,5,10,15])
popFront([4,5,7,9])


// PROBLEM #3
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]
function InsertAt(arr, x, val) {
    position = x
    num = val
    var Poop = arr
    Poop[Poop.length] = Poop[position]
    Poop[position] = num
    console.log(Poop)
}

InsertAt([100,200,5], 2, 311)
InsertAt([9,33,7], 1, 42)

// PROBLEM #4
// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
function removeAt(arr, ind){
    var stuff = arr
    stuff.splice([ind])
    console.log(stuff)
}

removeAt([1000,3,204,77], 1)
removeAt([8,20,55,44,98], 3)


// PROBLEM #5
// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:
// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]
function inserAt(arr){
    var chopper = arr
    // console.log(length)
    if (chopper.length % 2 == 0)
        x = chopper[0]
        chopper[0] = chopper[1]
        chopper[1] = x
    console.log(chopper)
}

inserAt([1,2,3,4])
insertAt(["Brendan",true,42])


// PROBLEM #6
// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:
// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]
function removeDupes(arr){
    var list = arr
    for x in range(0, list.length-1):
        if x ==
}