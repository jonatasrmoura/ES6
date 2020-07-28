"use strict";

// ============= Operadores em Array =================
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // cada item do vetor arr, vai passar por essa função

var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // --------------------------

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // --------------------------

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
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
