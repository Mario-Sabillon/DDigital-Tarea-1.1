//

function generarReporte(ventas) 
{
    let totalVentas = 0;
    let cantidadTransacciones = ventas.length;

    // Calcular ventas
    ventas.forEach(venta => {
        totalVentas += venta.monto;
    });

    // Calcular el promedio de ventas
    let promedio = totalVentas / cantidadTransacciones;

    // Retornar el objeto con resultados
    return {
        totalVentas: totalVentas,
        promedio: promedio,
        cantidadTransacciones: cantidadTransacciones
    };
}

// Datos :
const ventas = [
    { producto: 'Producto A', monto: 100 },
    { producto: 'Producto B', monto: 200 },
    { producto: 'Producto C', monto: 150 }
];

const reporte = generarReporte(ventas);
console.log(reporte);


