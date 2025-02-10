


// Array inicial de los productos
const productos = [
    { nombre: "Camiseta Tipo Polo", precio: 65 },
    { nombre: "Camisete Cuello V", precio: 45 },
    { nombre: "Camiseta Cuello O", precio: 35 },
    { nombre: "Zapatos Formal", precio: 70 },
    { nombre: "Tennis Casual", precio: 60 },
    { nombre: "Tennis Deportivo", precio: 80 },
    { nombre: "Sandalias de Baño", precio: 20 },
    { nombre: "Sandalias Crocs", precio: 50 },
];
function aplicarImpuestos(productos) 
{
    // Filtrar precio mayor a 50
    const productosFiltrados = productos.filter(producto => producto.precio > 50);
    
    // Aumentar precio de productos filtrados agregando impuesto
    const productosConImpuesto = productosFiltrados.map(producto => {
        return {
            nombre: producto.nombre,
            precio: producto.precio * 1.10
        };
    });
    
    // Retornar el nuevo array modificado
    return productosConImpuesto;
}

// Aplicar impuestos y obtener el resultado
const resultado = aplicarImpuestos(productos);

// Imprimir el resultado
console.log(resultado);

