
// ============= Valores Padrão ==============
function soma(a = 3, b = 6) {
    return a + b;
};

console.log(soma(1));
console.log(soma());

const subtrair = (a = 3, b = 6) => a - b;

console.log(subtrair(1));
console.log(subtrair());




















/* 
// ========= Arrow Function =================
const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(item => item * 2);
console.log(newArr);


const newArr = arr.map(item => {
    return item * 2;
});
console.log(newArr);

// Código polido com arrow function
const teste = () => ({nome: 'João'});
console.log(teste())
 */

/* 
// ============= Operadores em Array =================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// cada item do vetor arr, vai passar por essa função
const newArr = arr.map(function(item, index) {
    return item * index;
});

console.log(newArr);


const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);
// --------------------------
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);
// --------------------------
const find = arr.find(function(item) {
    return item === 4;
});

console.log(find);
 */

/* 
// ========= variáveis de Escopos ====================================
function teste(x) {
    let y = 2;

    if(x > 5) {
        let y = 4;
        console.log(x, y);
    }
}

teste(10);

// ============= COSNTANTES ===========
const usuario = {nome: 'João'};
usuario.nome = 'Diego';
console.log(usuario);
 */

// ============== CLASSES ==============================================
/* Ele já vai mostrar a soma porque o método é static ele não vai precisar
definir uma nova classe Matematica e não depende de mais nenhuma informação
da nossa classe */
/* 
class Matematica {
    static soma(a, b) {
        return a+b;
    }
}

console.log(Matematica.soma(1, 2));
console.log(Matematica.soma(100, 900));
console.log(Matematica.soma(50, 50));
console.log(Matematica.soma(6, 4));

 */

// ===================================================================

/* 
// Herança JS
class List {
    constructor() {
        this.data = [];
    };

    add(data) {
        this.data.push(data);
        console.log(this.data);
    };
};

class TodoList extends List {
    constructor() {
        // chama o constructor da classe pai
        super();

        this.usuario = "Diego";
    };

    mostrarUsuario() {
        console.log(this.usuario);
    };
};

// Intanciar essa primeira classe
var MinhaLista =  new TodoList();

document.querySelector(`button#novotodo`).onclick = function() {
    MinhaLista.add('Novo todo');
};

MinhaLista.mostrarUsuario();
 */