var square = (num) => num*num
console.log(square(5)) 

var user = {
    name: 'Suresh',
    sayHi: () => {
        //console.log(arguments)
        console.log(`Hi. I'm  ${this.name}`)
    },
    sayHello () {
        console.log(arguments)
        console.log(`Hello. I'm  ${this.name}`)
    }
}
user.sayHi()
user.sayHello()