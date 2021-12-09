// let numerodeAlunos = 10;

// let contador = 0; (Segndo Exemplo)


// Primeiro Exemplo
// for (let contador = 0; contador <= numerodeAlunos; contador++){
//     //console.log(contador)
    
//     if(contador == 0){
//         console.log("O número atual é zero")

//     } else if(contador % 2 == 0){ // % 2 == 0 (verifica se é par)
//         console.log("O número atual " + contador + " é Par")

//     } else {
//         console.log(`O número atual ${contador} é Impar`)

//     }
// }


// Segundo Exemplo
// while(contador <= numerodeAlunos){
    
//     if(contador == 0){
//         console.log("O número atual é zero")

//     } else if(contador % 2 != 0){  // % 2 != 0 (verifica se é impar)
//         console.log("O número atual " + contador + " é Impar")

//     } else {
//         console.log(`O número atual ${contador} é Par`)
        
//     }

//     contador++;

// }

let nomeDeAluno = ["Marcel","Franklin","Rita","Afranio","Gustavo","Jessica"]

for (let nome of nomeDeAluno){
    console.log(`Está pessoa se chama ${nome}`)
    
}
