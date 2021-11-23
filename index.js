const convertString = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}
console.log(convertString('JNKokmnklnKKIOJKLmlkmlkJLKOop'))

////////////////////////

const sayHello = (name) => {
    if (name === 'Mark') {
        return 'Hi, Mark!'
    }

    return `Hello, ${name}!`
} 
console.log(sayHello('Oleg'))

/////////////////////////

const filterStrings = (array, len) => {
    return array.filter(string => string.length <= len)
}

console.log(filterStrings(['adsfasdf', 'adsg', 'adgdsgdasgdsfhadgadsg'], 9))