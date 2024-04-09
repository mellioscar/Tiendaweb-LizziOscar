//FUNCION PARA CONVERTIR UN NUMERO A FORMATO MONEDA
export function convertirAMoneda(numero) {
    const formatoMoneda = new Intl.NumberFormat('es-AR', { 
        style: 'currency', 
        currency: 'ARS' 
    });

    return formatoMoneda.format(numero);
}