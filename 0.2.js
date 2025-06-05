// EQUAÇÃO DE 2º GRAU COM RAÍZES REAIS

let a = 1
let b = (-5)
let c = 6

let delta = (b*b) - 4*a*c

let raizQ = Math.sqrt(delta)

let raiz1 = ((-b) + raizQ) / (2 * a)
let raiz2 = ((-b) - raizQ) / (2 * a)


console.log(`Delta = ${delta}`)
console.log(`x1 = ${raiz1}`)
console.log(`x2 = ${raiz2}`)