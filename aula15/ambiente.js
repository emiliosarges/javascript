let num = [5, 8, 2, 10, 3]
console.log(num)

num[5] = 4
num.push(9)
/*num.length */ 
/*num.sort() */
/*num.sort() */

console.log(`Nosso vetor é o possui os seguintes números ${num}`)
console.log(`Nosso vetor possui ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
let pis = num.indexOf(50)
console.log(`O valor 8 está na posição ${pos}`)
console.log(`O valor 50 está na posição ${pis}`) //retornar -1 informando que o número não existe no array