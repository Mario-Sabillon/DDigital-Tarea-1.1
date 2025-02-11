

function contarOcurrencias(array) 
{
    const ocurrencias = {};
    
    array.forEach(elemento => {
        if (ocurrencias[elemento]) 
           {ocurrencias[elemento]++;} 
        else 
           { ocurrencias[elemento] = 1;}
    });
    
    return ocurrencias;
}

// Ejemplo de uso:
const elementos = ['manzana', 'naranja', 'manzana', 'pera', 'naranja', 'manzana'];

const resultado = contarOcurrencias(elementos);

console.log(resultado); // { manzana: 3, naranja: 2, pera: 1 }
