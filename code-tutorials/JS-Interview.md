# JS Interview questions

## Event Loop
```js
function printing() {
console.log(1);
setTimeout(function() { console.log(2); }, 1000);
setTimeout(function() { console.log(3); }, 0);
console.log(4);
}

printing();
```

* code will be executed in 1, 4, 3, 2 order


## Closures
* fix this code to return You clicked element: #1, etc.

```js
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
nodes[i].addEventListener('click', function() {
console.log('You clicked element #' + i);
});
}
```

### Solution
```js
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
     nodes[i].addEventListener('click', (function(i) {
          return function() {
       console.log('You clicked element #' + i);
}
})(i));
}
```


## Scope
```js
(function() {
var a = b = 7;
})(); console.log(b);
```
* Code returns 7, because b is in global scope

## Repeat string
```js
String.prototype.repeatify = String.prototype.repeatify || function(times) {
var str = '';
for (var i = 0; i < times; i++) {
str += this;
}
return str;
};
```

## Hoisting
```js
function test() {
console.log(a);
console.log(foo());
var a = 1;

function foo() {
return 2;
    }
}

test();
```
* Code returns ```2``` and ```undefined```, bacuase ```a``` is automatically defined at the beginning of the scope without value


## This
```js
var fullname = 'John Doe';

var obj = {
fullname: 'Colin Ihrig',

prop: {
fullname: 'Aurelio De Rosa',
getFullname: function() {
return this.fullname;
       }
   }
};

console.log(obj.prop.getFullname());    //Aurelio Rosa

var test = obj.prop.getFullname;
console.log(test());     //JohnDoe

```
* code returns Aurelio De Rosa and John Doe
```js
console.log(test.call(obj.prop));
```
* Aurelio De Rosa
SOURCE: https://www.sitepoint.com/5-typical-javascript-interview-exercises/


