const elementos = ['Programación Web', 'Sistemas Operativos', 'Fundamentos de Base de Datos', 'Graficación', 'Gestión de Proyectos de Software'];

const lista = document.getElementById('miLista');

elementos.forEach((item) => {
  const li = document.createElement('li'); 
  li.textContent = item;                   
  lista.appendChild(li);                   
});
