function agregarCarrito(nombre, precio, imagen) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio,
        imagen: imagen
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("✅ Producto agregado al carrito");
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function eliminarProducto(index) {

    let carrito = obtenerCarrito();

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}

function vaciarCarrito() {

    localStorage.removeItem("carrito");

    mostrarCarrito();
}

function finalizarCompra() {

    let metodo = document.getElementById("metodoPago").value;

    alert(
        "✅ Compra realizada\n\n" +
        "Método de pago: " + metodo
    );

    localStorage.removeItem("carrito");

    mostrarCarrito();
}

function mostrarCarrito() {

    let carrito = obtenerCarrito();

    let contenedor = document.getElementById("carrito");

    let totalElemento = document.getElementById("total");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        contenedor.innerHTML =
        "<h2>🛒 Tu carrito está vacío</h2>";

        totalElemento.innerHTML = "Q0";

        return;
    }

    carrito.forEach((producto, index) => {

        total += producto.precio;

        contenedor.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}" alt="">
                
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>Q${producto.precio}</p>
                </div>

                <button onclick="eliminarProducto(${index})">
                    Eliminar
                </button>
            </div>
        `;
    });

    totalElemento.innerHTML = "Q" + total;
}

window.onload = mostrarCarrito;