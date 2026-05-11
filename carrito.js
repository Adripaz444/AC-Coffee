let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio, imagen){
    carrito.push({
        nombre: nombre,
        precio: precio,
        imagen: imagen
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(nombre + " agregado al carrito");
}

function mostrarCarrito(){
    let contenedor = document.getElementById("carrito-contenedor");
    let total = 0;
    contenedor.innerHTML = "";
    carrito.forEach((producto, index) => {
        total += producto.precio;
        contenedor.innerHTML += `
        <div class="producto-carrito">
            <img src="${producto.imagen}">
            <div>
                <h2>${producto.nombre}</h2>
                <p>Q${producto.precio}</p>
            </div>
            
            <button onclick="eliminarProducto(${index})">
                Eliminar
            </button>
        </div>

        `;
    });

    document.getElementById("total").innerHTML =
    "Total: Q" + total;
}

function eliminarProducto(index){
    carrito.splice(index, 1);
    localStorage.setItem("carrito",
    JSON.stringify(carrito));
    mostrarCarrito();
}

function vaciarCarrito(){
    localStorage.removeItem("carrito");
    carrito = [];
    mostrarCarrito();
}
