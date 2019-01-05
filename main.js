var me = {
    name: 'Alex',
    age: 39,
    greeting() {
        console.log('Hi, ' + this.name);
    }
};

console.log(me.greeting());