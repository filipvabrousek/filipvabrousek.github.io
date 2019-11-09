# Sorting algorithms

## Bubble sort
* Bubble sort is one of the slowest, but also simplest sorting algorithms out there.  
* line 1: we loop through the array.length - 1, because we won't be comparing the last element.
* line 2: we loop through the array.length - 1 - j,
* because we need (n-2) iterations at the 2nd pass and (n-3) at the third pass.. and so on
* line 3: if current member is bigger than element to the right, we swap them

```js
let arr = [8, 4, 6, 7];

function bubble(arr){
 // 1   
for (let j = 0; j < arr.length - 1; j++){
    // 2
    for (let i = 0; i < (arr.length - j - 1); i++){
        // 3
        if (arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}
    return arr;
}
    
    
let res = bubble(arr);
console.log(res); // [4, 6, 7, 8    ]   
```

## Quick sort
* quick sort sorts the element by pushing the el. to either left or right array,
* if the member is less than / bigger than or equal the first member (pivot point)
* use recursive call in return to merge the 3 arrays together
```js
let arr = [8, 4, 6, 7];

function quick(arr){
    if (arr.length < 2) {return arr}
    
    let pivot = arr[0], left = [], right = [];
    
    for (let i = 1; i < arr.length; i++){
       
       switch(true){
            case (arr[i] < pivot) :
                left.push(arr[i]);
                break;
                
            case (arr[i] >= pivot):
               if (arr[i]){
                   right.push(arr[i]);  
                   break;
               }  
        }
   }
    return [].concat(quick(left), pivot, quick(right));
} 
   
let qs = quick(arr);
console.log(qs);
```

## Insertion sort
* Insertion sort should be used to sort short rather than long arrays
* line 1: we get our value at specified index
* line 2: we set j to be less than i than enter our for loop and see 2 conditions: if j is 0 or positive and member to the left (j) of temp member is bigger than temp  element, copy every higher element on index ahead

* 5, 9, 13, 4, 1, 6 // the only sorted part is the first item
* 5, 9, 13, 4, 1, 6 // 9 > 5 so we don't move it
* 5, 9, 13, 4, 1, 6 // 13 > 9 we don't move it
* 4, 5, 9, 13, 1, 6 // compare all to 4, until we reach the head
* 1, 4, 5, 9, 13, 6 // compare all to 1, until we reach the head
* 1, 4, 5, 6, 9, 13 // first smaller item is 5, place 6 before it

* Source: https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
