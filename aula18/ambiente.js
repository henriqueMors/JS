let num = [ 1 , 9 , 8 ]
num[0] = 6 // adiciona elemento em um devido lugar
num.push(7) //adiciona elemento
num.length

console.log(`Nosso vetor é ${num}`)
console.log(num.length)
console.log(num.sort())
console.log(`Nosso vetor é ${num[2]}`)

for(pos=0; pos<=num.length; pos++) {
    console.log(num[pos])
}
console.log(num.indexOf(9)) //busca por um valor