//Exemplo 01
//Usando var(escopo global/função)

//criou variavel
var nome = "Rafael";
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}
nome = 15
console.log(nome);

// usando let (escopo de bloco)
let idade = 9;
console.log(idade);

if(true){
    let idade = 25;
    console.log(idade);
}
idade = "Rafael";
console.log(idade);


//Usando const
const PI = 3;
console.log(PI);

if(true){
    const PI = 5;
    console.log(PI);
}
PI = "TI"
console.log(PI);
