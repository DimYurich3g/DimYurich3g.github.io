'use strict';

let a  = [3, 4, 5];
let c = a.map(function(x){
        return x*2;
});

console.log (c);




function camelize (str) {
   return str
   .split('-')
   .map((x,y) => x == 0? x: x[0].toUpperCase() + x.slice(1) )
   .join ('');
    
}

let i = 'putin-aboba-zhmot';

camelize(i);
console.log (camelize(i));

let arr = [5,3,8,1];

function filterRange (arr, a, b) {
    return arr.filter (x => (x>=a && x<=b ));
}

let filtered  = filterRange (arr, 1, 4);

console.log (filtered );

console.log(arr);