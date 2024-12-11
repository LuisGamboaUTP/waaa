// carrito.js
document.addEventListener("DOMContentLoaded", function () {
    const btnAddToCart = document.querySelectorAll(".btn-add-to-cart");

    btnAddToCart.forEach(button => {
        button.addEventListener("click", function () {
            const nombre = this.getAttribute("data-nombre");
            const precio = this.getAttribute("data-precio");
            const img = this.getAttribute("data-img");

            // Crear objeto producto
            const producto = {
                nombre: nombre,
                precio: precio,
                img: img,
                cantidad: 1
            };

            // Obtener carrito actual del localStorage, si existe
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            // Agregar el nuevo producto al carrito
            carrito.push(producto);

            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            // Opcional: Confirmación visual o alerta
            alert(`${nombre} ha sido añadido al carrito.`);
        });
    });
});

// carrito.js (en carro.html)
document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedorCarrito = document.querySelector(".contenedor-carrito"); // O donde quieras mostrar el carrito

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>No hay productos en el carrito</p>";
    } else {
        carrito.forEach(producto => {
            contenedorCarrito.innerHTML += `
                <div class="producto-carrito">
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <h4>${producto.nombre}</h4>
                    <p>Precio: S/ ${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                </div>
            `;
        });
    }
});


// carrito.js
document.getElementById('verificarBtn').addEventListener('click', function() {
    // Aquí puedes agregar el código para la verificación del carrito
    alert('Verificando el carrito de compras...');
    // Si deseas realizar alguna otra acción, como redirigir, puedes agregarlo aquí.
    // window.location.href = 'pago.html'; // Ejemplo de redirección
});
