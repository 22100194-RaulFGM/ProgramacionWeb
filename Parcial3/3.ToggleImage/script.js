const cajas = document.querySelectorAll('.caja');
const contenedor = document.getElementById('idcontene');
let descubiertas = [];

function revelar(index) {
  if (!descubiertas.includes(index)) {
    cajas[index].style.opacity = 0;
    descubiertas.push(index);
  }
}

cajas.forEach((caja, index) => {
  caja.addEventListener('click', () => revelar(index));
});

function cargarImagen() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomfox.ca/floof/', true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status === 200) {
      const imageUrl = xhr.response.image;
      contenedor.style.backgroundImage = `url(${imageUrl})`;
      contenedor.style.backgroundSize = '450px 600px';
      contenedor.style.backgroundRepeat = 'no-repeat';

      descubiertas = [];
      cajas.forEach((caja) => {
        caja.style.opacity = 1;
      });
    }
  };

  xhr.send();
}

const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', cargarImagen);

window.onload = cargarImagen;
