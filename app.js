document.addEventListener('DOMContentLoaded', () => {  

//VARIABLES

// const list = document.getElementById('list');
// const input = document.getElementById('nameInput');
// const addBtn = document.getElementById('addBtn');
const list = document.querySelector('.list');
const input = document.querySelector('.nameInput');

let contacts = [];

const fragment = document.createDocumentFragment();

//EVENTOS
document.addEventListener('click', (ev) => {
  // Evento: click en botón de agregar
  if(ev.target.matches('.addNameBtn')){
    add();
  }
  // Evento: click boton de eliminar
  else if(ev.target.matches('.deleteNameBtn')){
    remove(ev.target.dataset.id);
  }
});

function render() {
  eliminarElementosDOM(list)
  for (let i = 0; i < contacts.length; i++) {
    const newLi = document.createElement("LI");
    newLi.textContent = `${contacts[i]} `;
  
    const button = document.createElement('button');
    button.textContent = "X"
    button.className = "deleteNameBtn"
    button.dataset.id = i

    newLi.append(button);
    fragment.append(newLi);
  }
  list.append(fragment)
}

function add() {
  if (input.value.trim() === '') return;
  contacts.push(input.value);
  input.value = '';
  render();
}

function remove(i) {
  contacts.splice(i, 1);
  render();
}

const eliminarElementosDOM = (elemento) => {
    elemento.innerHTML = "";
}

});