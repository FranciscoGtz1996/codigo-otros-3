// Tenemos un li de productos
//Cambiamos la ruta de las imagenes, por la carpeta hecha de assets
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "assets/taco-negro.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "assets/taco-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "assets/zapato-rojo.jpg"}
]

//Agregamos el arreglo de los productos, para mostrarlos
const li = document.getElementsByName("lista-de-productos") [0]; 
const $i = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

displayProductos(productos)
const botonDeFiltro = document.querySelector(".button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  