// Alternar visibilidad del carrito
document.addEventListener('DOMContentLoaded', function () {
    function toggleCarrito() {
        const contenedorCarrito = document.querySelector('.contenedor-carrito');
        contenedorCarrito.classList.toggle('mostrar');
    }

    // Asignar el evento al ícono del carrito
    const carritoIcono = document.querySelector('.carrito-icono');
    carritoIcono.addEventListener('click', toggleCarrito);
});

// Redirigir según la categoría seleccionada
function redirectToCategory() {
    const selectBox = document.getElementById("searchDropdownBox");
    const selectedValue = selectBox.value;

    if (selectedValue) {
        window.location.href = selectedValue;
    } else {
        alert("Por favor selecciona una categoría válida.");
    }
}

//javascript para el menu despegable para moviles
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.right-section .menu');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});




// Función para abrir el modal
function abrirModal(imagenSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var closeBtn = document.getElementById("cerrar-modal");

    // Cambia la fuente de la imagen del modal al hacer clic
    modal.style.display = "block";
    modalImg.src = imagenSrc;

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Cerrar el modal al hacer clic fuera de la imagen
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}






document.addEventListener('DOMContentLoaded', function () {
    const inputBuscar = document.querySelector('.inputbox input'); // Selecciona el campo de entrada
    const botonBuscar = document.querySelector('.btn button'); // Selecciona el botón Buscar

    // Función para redirigir
    function buscarProducto() {
        const query = inputBuscar.value.toLowerCase(); // Convertir el texto a minúsculas
        const paginas = {
            audifonos: "audifonos.html",
            celulares: "celulares.html",
            teclados: "teclados.html",
            laptops: "laptops.html",
            zapatillas: "zapatillas.html",
            televisores: "televisores.html",
            "productos de limpieza": "productosLimpieza.html"
        };

        // Verifica si lo ingresado está en las categorías
        if (paginas[query]) {
            window.location.href = paginas[query]; // Redirige a la página correspondiente
        } else {
            alert("No se encontró ningún producto con ese nombre.");
        }
    }

    // Añadir eventos al botón y al presionar Enter
    botonBuscar.addEventListener('click', buscarProducto);
    inputBuscar.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            buscarProducto();
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Array para almacenar los productos del carrito
    const carrito = [];

    // Función para agregar productos al carrito
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        actualizarCarrito();
    }

    // Función para actualizar el carrito visualmente
    function actualizarCarrito() {
        const contenedorCarrito = document.querySelector('.contenedor-carrito');
        contenedorCarrito.innerHTML = ''; // Limpiar carrito antes de actualizar

        // Si el carrito está vacío
        if (carrito.length === 0) {
            contenedorCarrito.innerHTML = '<p>Tu carrito está vacío</p>';
        } else {
            const listaDeProductos = document.createElement('ul');
            listaDeProductos.classList.add('nav-card');

            carrito.forEach(producto => {
                const itemProducto = document.createElement('li');
                itemProducto.classList.add('lista_de_productos');

                itemProducto.innerHTML = `
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <p>${producto.nombre}</p>
                    <p>$${producto.precio}</p>
                    <p><span>Eliminar</span></p>
                `;

                // Agregar funcionalidad para eliminar productos del carrito
                itemProducto.querySelector('span').addEventListener('click', () => {
                    const index = carrito.indexOf(producto);
                    if (index > -1) {
                        carrito.splice(index, 1);
                        actualizarCarrito();
                    }
                });

                listaDeProductos.appendChild(itemProducto);
            });

            // Añadir el botón de vaciar carrito
            const vaciarCarritoBtn = document.createElement('button');
            vaciarCarritoBtn.classList.add('vaciar_carrito');
            vaciarCarritoBtn.textContent = 'Vaciar carrito';
            vaciarCarritoBtn.addEventListener('click', () => {
                carrito.length = 0; // Vaciar carrito
                actualizarCarrito();
            });

            // Insertamos los productos y el botón en el contenedor del carrito
            contenedorCarrito.appendChild(listaDeProductos);
            contenedorCarrito.appendChild(vaciarCarritoBtn);
        }

        // Mostrar el número total de productos en el carrito
        const totalProductos = document.querySelector('.total-productos');
        totalProductos.textContent = carrito.length;
    }

    // Asignar el evento de "Añadir al carrito" a los botones
    const botonesAñadirCarrito = document.querySelectorAll('.btn-add-to-cart');
    botonesAñadirCarrito.forEach(boton => {
        boton.addEventListener('click', function () {
            const producto = {
                nombre: boton.getAttribute('data-nombre'),
                precio: parseFloat(boton.getAttribute('data-precio')),
                img: boton.getAttribute('data-img')
            };
            agregarAlCarrito(producto);
        });
    });
});

