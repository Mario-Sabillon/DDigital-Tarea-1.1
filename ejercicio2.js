

// Elementos
const productos = 
[
    { id: 1, nombre: "Borrador", stock: 20 },
    { id: 2, nombre: "Cuaderno", stock: 25 },
    { id: 3, nombre: "Zacapunta", stock: 20 },
    { id: 4, nombre: "Libreta", stock: 12 },
    { id: 5, nombre: "Cartulina", stock: 15 },
    { id: 6, nombre: "Regla", stock: 15 },
    { id: 7, nombre: "Lápiz", stock: 50 },
    { id: 8, nombre: "Portamina", stock: 10 },
];

function actualizarStock(productos, id, nuevoStock) 
{
    // Buscar el producto con el id 
    for (let producto of productos) 
    {
        if (producto.id === id) 
        {
            // Actualizar su propiedad stock con el nuevoStock
            producto.stock = nuevoStock;
            return productos;
        }
    }
    // Si el producto no existe, retornar null
    return null
}


// --------------------------------------------------
const resultado = actualizarStock(productos, 10, 15);
// --------------------------------------------------


// Imprimir el resultado
console.log(resultado);