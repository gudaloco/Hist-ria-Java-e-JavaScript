// 1. Declaração de Variáveis e Tipagem
let numero = 10; // Variável inicializada como
número
console.log(numero);
numero = "dez"; // Agora a variável armazena uma
string
console.log(numero);

// 2. Sintaxe e Estruturas de Controle
console.log("Olá, Mundo!"); // Saída no console

// 3. Funções e Métodos
function saudacao() {
    console.log("Olá de uma função em JavaScript!");
    }
    saudacao(); //Chamando a função

// 4. Orientação a Objetos
class Pessoa { constructor(nome) {
    this.nome = nome; } saudacao() {
    console.log("Olá,meu nome é " + this.nome);
    }
    }
    const pessoa = new Pessoa("Carlos");
    pessoa.saudacao();

// 5. Execução Assíncrona
function tarefa() {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("Tarefa em segundo plano em JavaScript!");
     }, 1000);
    });
    }
    async function executarTarefa() {
    const resultado = await tarefa();
     console.log(resultado);
    }
    executarTarefa();