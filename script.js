// Datos de ejemplo de productos
const productos = [
  { id: 1,
    nombre: "Fresa con Moras",
    precio: 55, imagen: "https://i.imgur.com/erd9BAm.jpeg", 
    descripcion: "Un helado suave y cremoso hecho con fresas frescas y moras silvestres,"+ 
    "libre de azúcar añadida y endulzado naturalmente. Su alto contenido en antioxidantes lo"+
    "convierte en un aliado ideal para fortalecer el sistema inmune y reducir la inflamación,"+
    "ayudando especialmente a personas en tratamiento oncológico." },
  { id: 2, 
    nombre: "Betabel con Naranja y Zanahoria", 
    precio: 60, imagen: "https://i.imgur.com/eJHUjsM.jpeg", 
    descripcion: "Una mezcla vibrante y saludable de betabel, naranja y zanahoria, diseñada para"+
     "ofrecer un sabor naturalmente dulce y refrescante. Este helado no solo es bajo en azúcar y"+
    "apto para personas con diabetes, sino que también ayuda a aliviar la resequedad bucal y las"+
    "náuseas causadas por tratamientos como la quimioterapia. Gracias a sus ingredientes ricos en"+
    "antioxidantes y vitamina C, es una opción deliciosa que cuida tu bienestar." }
];

const gridProductos = document.getElementById("gridProductos");
const listaCarrito = document.getElementById("listaCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const verCarrito = document.getElementById("verCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");

let carrito = [];

function renderProductos() {
  productos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio}</p>
      <p class="descripcion">${p.descripcion}</p>
      <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
    `;
    gridProductos.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });
  cantidadCarrito.textContent = carrito.length;
  totalCarrito.textContent = carrito.reduce((acc, item) => acc + item.precio, 0);
}

verCarrito.addEventListener("click", () => {
  modalCarrito.style.display = "flex";
});

cerrarCarrito.addEventListener("click", () => {
  modalCarrito.style.display = "none";
});

function enviarFormulario(event) {
  event.preventDefault();
  alert("Mensaje enviado. Gracias por contactarnos.");
}


// Inicializar
renderProductos();
