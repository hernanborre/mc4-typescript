

function sumar(num1: number, num2: number):number{
    return num1 + num2
}

function imprimirSuma(num1: number, num2: number): string {
    //return (num1  + num2).toString()
    return `La suma es: ${num1 + num2}` 
}

let texto: string = "hola como estas?" 
let n1:number = 3
let n2:number = 10

let arr:number [] = []
arr.push(n1)
arr.push(n2)

sumar(n1, n2)
console.log(imprimirSuma(n1, n2))

interface Persona {
    name?: string
    edad: number
}

let num4 = 10 

let p1: Persona = {
    edad: 18 
}
