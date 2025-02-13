//Exemplo 03: Classes
class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    exibirInformaçoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}. `;
    }
}
const cachorro = new Animal("Duck", "cachorro");
const gato = new Animal("noel", "gato");

console.log(cachorro.exibirInformaçoes());
console.log(gato.exibirInformaçoes());