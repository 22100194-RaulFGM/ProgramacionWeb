const elementos = [
  'Programación Web', 
  'Sistemas Operativos', 
  'Fundamentos de Base de Datos', 
  'Graficación', 
  'Gestión de Proyectos de Software'
];

const lista = document.getElementById('miLista');

elementos.forEach((item) => {
  const li = document.createElement('li'); 
  li.textContent = item;                   
  lista.appendChild(li);                   
});

function agregarElemento() {
  const input = document.getElementById('nuevoElemento');
  const valor = input.value.trim();
  if (valor !== "") {
    const li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
    input.value = ""; 
  }
}

const btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', agregarElemento);
