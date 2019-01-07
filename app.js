/*class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor () {
        const btn = document.querySelector('button');
        this.names = ['Max', 'Ana', 'Manu', 'Piter'];
        this.currentName = 0;
        //btn.addEventListener('click', this.addName);
        //btn.addEventListener('click', this.addName.bind(this));
        btn.addEventListener('click', () => {
            this.addName();
        });
    } 

    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator(); 
*/
//Async Code & Promises
/*const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

setTimeout(() => {
    console.log("Timer done!");
    fetchData(text => {
        console.log(text);
        
    })
}, 3000);

console.log('Hello 1');
console.log('Hello 2');
*/
// PROMISES
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer done!");
    fetchData()
        .then(text1 => {
            console.log(text1);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
            //return fetchData();
        });
            
}, 3000);

console.log('Hello 1');
console.log('Hello 2');
