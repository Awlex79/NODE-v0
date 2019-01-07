var me = {
    name: 'Alex',
    age: 39,
    greeting() {
        console.log('Hi, ' + this.name);
    }
};

console.log(me.greeting());

var arr = [10, 20, 30, 40];
for (let zZz of arr) {
    //let newArr = arr.push(zZz++);
    //console.log(newArr); 
    zZz++;
    console.log(zZz);
}

console.log(arr);


/* FUNCTION GENERATOR */

function* idMaker() {
    var index = 0;
    while (index < 4)
    yield index++;
}

var gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
     
    }
}

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
//  console.log(hobby);
//    }
// console.log(hobbies.map(hobby => 'Hobby:' + hobby));
// console.log(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);

    


