
function combinarUsuarios(usuarios, detalles) 
{
    // Crear un objeto tipo array
    const detallesPorId = {};
    
    // Llenar el objeto con los detalles
    detalles.forEach(detalle => 
    {
        detallesPorId[detalle.id] = detalle;
    });
    
    // Combinar los usuarios con sus detalles
    return usuarios.map(usuario => 
    {
        return {...usuario, ... detallesPorId[usuario.id]};
    });
}

// Datos
const usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Pedro' }
];

const detalles = [
    { id: 1, edad: 30, ciudad: 'Madrid' },
    { id: 2, edad: 25, ciudad: 'Barcelona' },
    { id: 3, edad: 35, ciudad: 'Valencia' }
];

const resultado = combinarUsuarios(usuarios, detalles);
console.log(resultado);


// Salida:
// [
//     { id: 1, nombre: 'Juan', edad: 30, ciudad: 'Madrid' },
//     { id: 2, nombre: 'María', edad: 25, ciudad: 'Barcelona' },
//     { id: 3, nombre: 'Pedro', edad: 35, ciudad: 'Valencia' }
// ]
