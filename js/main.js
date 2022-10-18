/* 10. 
    let fruits = ['kiwi', 'apple', 'pear'];
Lägg till en frukt i slutet av arrayen ovan. */

let fruits = ['kiwi', 'apple', 'pear'];

fruits.push('orange')

// 11. Lägg till en frukt i början av arrayen ovan.

fruits.unshift('pineapple')

// 12. I arrayen ovan, ta bort sista frukten i arrayen.

fruits.pop()

// 13. I arrayen ovan, ta bort första frukten i arrayen.

fruits.shift()

// 14. Sätt in en frukt i arrayen ovan på index 1.

fruits.splice(1, 0, 'grapefruit')

// 15. Sätt in tre frukter i arrayen ovan på index 2.

fruits.splice(2, 0, 'peach', 'plum', 'mandarine')

console.log(fruits)

/* 16. 
    let names = ['David', 'Christoffer', 'Johan', 'Maja']
I arrayen ovan, ta bort Christoffer och Johan. */

let names = ['David', 'Christoffer', 'Johan', 'Maja']

let chrisIndex = names.indexOf('Christoffer')
names.splice(chrisIndex, 1)
let johanIndex = names.indexOf('Johan')
names.splice(johanIndex, 1)

console.log(names)

/* 17.
    let nums = [1,2,3,4,5,6,7,8,9];
Spegelvänd på arrayen ovan. */

let nums = [1,2,3,4,5,6,7,8,9];
let mirrorNums = []

while (nums.length > 0) {
    mirrorNums.push(nums.pop())
}
nums = [...mirrorNums]
console.log(nums)

/* 18.
let str = 'Supercalifragilisticexpialidocious';
Kika om strängen ovan innehåller bokstaven n. */

let str = 'Supercalifragilisticexpialidocious';
function checkFor(letter, str) {
    console.log(str.indexOf(letter) !== -1)
}

checkFor('n', str)

// 19. Kika om strängen ovan innehåller bokstaven x.

checkFor('x', str)

// 20. I ovanstående array, hitta vilket position första förekomsten av p har.

console.log(str.indexOf('p'))

// 21. I strängen ovan, plocka fram de 5 första tecknena.

console.log(str.slice(0, 5))

// 22. I strängen ovan, plocka fram de 7 sista tecknena.

console.log(str.slice(str.length - 7))