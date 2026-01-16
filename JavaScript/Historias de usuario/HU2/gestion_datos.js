// Inventario de productos 
let inventario = []; // Array para guardar productos
let idCounter = 1;   // Contador para generar IDs únicos automáticamente

// Set para garantizar unicidad de IDs 
const idsUnicos = new Set();

//  Map para asociar categoría -> producto 
const categorias = new Map();

/* Función para agregar un producto*/
function aggProduct() {
    let nombre = prompt("Ingrese el nombre del producto:");
    if (nombre === null) return;
    nombre = nombre.trim();

    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    let categoria = prompt("Ingrese la categoría del producto:");
    if (categoria === null) return;
    categoria = categoria.trim();

    // Validación básica
    if (!nombre || isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0 || !categoria) {
        alert("Datos incompletos o incorrectos. Intente de nuevo.");
        return;
    }

    // Generamos ID
    let id = idCounter++;
    idsUnicos.add(id);

    // Creamos objeto producto
    let producto = {
        id,
        nombre,
        precio,
        cantidad,
        categoria
    };

    //  VALIDACIÓN FINAL DEL OBJETO (AQUÍ SÍ)
    if (
        typeof producto.id !== "number" ||
        typeof producto.nombre !== "string" ||
        typeof producto.precio !== "number"
    ) {
        alert("Error: producto inválido.");
        return;
    }

    // Guardamos producto
    inventario.push(producto);

    // Map categoría → productos
    if (!categorias.has(categoria)) {
        categorias.set(categoria, []);
    }
    categorias.get(categoria).push(nombre);

    alert("Producto agregado correctamente al inventario.");
}


/* Función para mostrar inventario*/
function mostrarInv() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
        return;
    }

    let msj = "=== Inventario ===\n";

    // Recorremos inventario con for...of
    for (let p of inventario) {
        msj += `ID: ${p.id} | Producto: ${p.nombre} | Precio: ${p.precio} | Cantidad: ${p.cantidad} | Categoría: ${p.categoria}\n`;
    }

    alert(msj);

    // Ejemplo de iteración con for...in sobre el primer producto
    let primerProducto = inventario[0];
    console.log("Propiedades del primer producto:");
    for (let key in primerProducto) {
        console.log(`${key}: ${primerProducto[key]}`);
    }

    // Ejemplo de Object.keys, Object.values, Object.entries
    console.log("Keys:", Object.keys(primerProducto));
    console.log("Values:", Object.values(primerProducto));
    console.log("Entries:", Object.entries(primerProducto));
}

/*Función para mostrar Set de IDs */
function mostrarIDs() {
    if (idsUnicos.size === 0) {
        alert("No hay IDs registrados.");
        return;
    }

    let mensaje = "IDs únicos del inventario:\n";

    // for...of es el correcto para Set
    for (let id of idsUnicos) {
        mensaje += `- ${id}\n`;
    }

    alert(mensaje);
}


/* Función para mostrar Map de categorías*/
function mostrarCategorias() {
    console.log("MAP COMPLETO:", categorias);

    if (categorias.size === 0) {
        alert("No hay categorías registradas.");
        return;
    }

    let mensaje = "=== Categorías y productos ===\n";

    categorias.forEach((productos, categoria) => {
        mensaje += `\nCategoría: ${categoria}\n`;
        for (let p of productos) {
            mensaje += ` - ${p}\n`;
        }
    });

    alert(mensaje);
}





/*Función de estadísticas */
function calcEstats() {
    let valorTotal = 0;
    let totalProductos = 0;

    for (let p of inventario) {
        valorTotal += p.precio * p.cantidad;
        totalProductos += p.cantidad;
    }

    alert(`=== Estadísticas ===
Valor total del inventario: ${valorTotal}
Cantidad total de productos: ${totalProductos}`);
}

/*Función de salir */
function exit() {
    alert("Saliendo del programa...");
}

/* Menú interactivo*/
let opcion = "";

while (opcion !== "6") {
    opcion = prompt(
        "=== MENÚ ===\n" +
        "1. Agregar producto\n" +
        "2. Mostrar inventario\n" +
        "3. Mostrar IDs únicos (Set)\n" +
        "4. Mostrar categorías (Map)\n" +
        "5. Calcular estadísticas\n" +
        "6. Salir"
    );

    switch (opcion) {
        case "1":
            aggProduct();
            break;
        case "2":
            mostrarInv();
            break;
        case "3":
            mostrarIDs();
            break;
        case "4":
            mostrarCategorias();
            break;
        case "5":
            calcEstats();
            break;
        case "6":
            exit();
            break;
        default:
            alert("Ingrese una opción válida.");
    }
}