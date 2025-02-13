//Exemplo 3
//Funçoes simples
function saudacao(nome){
    return "ola" + nome + "!";
}
console.log(saudacao(34));

// Funcao Anonima()
const soma = function(a,b){
    return a + b;
};
console.log(soma("SiM.TECO",9));

//Arrow Function(funçao de seta)
const multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,6));

//Objeto em javascript
const  Pessoa = {
    nomeUsuario : "Rafa",
    idade: 34,
    email: "rafa@Ui.com",
    usuario:"Professor",
    saudar: function(){
        return "oi, meu nome e:" + this.nomeUsuario + "e eu sou um" + this.usuario + ".";
    }

}
console.log(Pessoa);
console.log(Pessoa.saudar());