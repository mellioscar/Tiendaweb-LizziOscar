// const productos = [
//     {
//         id:'1',
//         name:'CAJA CEBADERA PARA ROEDORES',
//         stock:10,
//         price:1100,
//         description:'Caja Cebadera para Roedores es una excelente herramienta para utilizar en el manejo de plagas de roedores donde se necesita máximo profesionalismo, eficiencia y seguridad. Su material PEAD (Polietileno de alta densidad) le otorga una gran resistencia permitiendo proteger el cebo y trampas pegajosas de las condiciones ambientales más desfavorables. Puede ser utilizado en interior y exterior de instalaciones por tener un cierre con llave maestra, que entrega seguridad para humanos y mascotas. Es posible fijar al suelo y a la pared mediante tornillos de anclaje.',
//         imagen:'../images/producto-1.png',
//         category:'trampas'
//     },
//     {
//         id:'2',
//         name:'JAULA TRAMPA DE ROEDORES',
//         stock:20,
//         price:1200,
//         description:'Jaula galvanizada con alto nivel de efectividad para ratas, comadrejas, vizcachas, mulitas, etc. Muy práctica y fácil de montar. Sistema de presión. La puerta se cierra cuando el ratón pisa la palanca situada en el interior de la jaula. El cebo debe colocarse en el gancho situado encima de la palanca.',
//         imagen:'../images/producto-2.png',
//         category:'trampas'
//     },
//     {
//         id:'3',
//         name:'EQUIPO ATRAPAMOSCAS GRANDE METALICO',
//         stock:30,
//         price:1300,
//         description:'Captura insectos voladores, manejando la seguridad del ambiente sin tóxicos ni venenos. Los captura simplemente por atracción de la luz U.V. (ultravioleta). Equipos óptimos para utilizar en las fábricas de alimentos, bebidas, lácteos, caramelos, jugos, alfajores, dulces, frigoríficos, chacinados, bares, supermercados, restaurantes, hoteles, shop de estación de servicio, etc. Captura insectos voladores, provocando la muerte instantánea, sin tóxicos ni venenos de ningún tipo. La atracción de los insectos volador se produce por efecto de la luz U.V. (ultravioleta) quedando capturados en las planchas de pegamento especial, de alta adhesividad ubicadas y dispuestas a tal función.',
//         imagen:'../images/producto-3.png',
//         category:'insectos'
//     },
//     {
//         id:'4',
//         name:'PINCHES- MÓDULOS DE POLICARBONATO',
//         stock:40,
//         price:1400,
//         description:'Este es un sistema creado para evitar definitivamente que las palomas y otros pájaros se posen en cornisas, marcos de ventanas, tuberías, etc., en general para cualquier lugar sobresaliente de edificios y construcciones donde los pájaros puedan posarse para descansar, pernoctar, asolearse o divisar las zonas de alimentación. La red anudada de polietileno utilizada para evitar que las aves entren en zonas no deseadas. Es el método más eficiente y efectivo para alejar a las aves, y es la red para aves. Es posible fijar al suelo y a la pared mediante tornillos de anclaje.',
//         imagen:'../images/producto-4.png',
//         category:'aves'
//     },
//     {
//         id:'5',
//         name:'TRAMPAS PARA ROEDORES',
//         stock:50,
//         price:1500,
//         description:'Constituida con ABS (termoplástico más resistente) y acero súper rápido. Posee protección UV, lo cual permite su aplicación en exteriores, llegando a tener una vida útil mayor a los 10 años. Apertura a 90°, lo cual incrementa la potencia y fuerza de atrape. Su sistema único de atrape patentado, permite que el disparo no sea prematuro y hace que la efectividad de captura sea del 100%, optimizando la rapidez. Sus dimensiones la hacen la más grande del mercado, lo cual permite su uso en un amplio espectro de roedores, también posee sistema de anclaje propio. Fácil de activar sin riesgos para el usuario, permite liberar al roedor capturado de forma práctica y sencilla, destacando que los dedos nunca tocan al roedor.',
//         imagen:'../images/producto-5.png',
//         category:'trampas'
//     },
//     {
//         id:'6',
//         name:'EQUIPO ATRAPAMOSCAS CHICO METÁLICO',
//         stock:60,
//         price:1600,
//         description:'Captura insectos voladores, manejando la seguridad del ambiente sin tóxicos ni venenos. Los captura simplemente por atracción de la luz U.V. (ultravioleta). Equipos óptimos para utilizar en las fábricas de alimentos, bebidas, lácteos, caramelos, jugos, alfajores, dulces, frigoríficos, chacinados, bares, supermercados, restaurantes, hoteles, shop de estación de servicio, etc. Captura insectos voladores, provocando la muerte instantánea, sin tóxicos ni venenos de ningún tipo. La atracción de los insectos volador se produce por efecto de la luz U.V. (ultravioleta) quedando capturados en las planchas de pegamento especial, de alta adhesividad ubicadas y dispuestas a tal función.',
//         imagen:'../images/producto-6.png',
//         category:'insectos'
//     }
// ]

// export const getProducts =() => {
//     let error = false
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(error){
//                 reject('Hubo un problema intente mas tarde')
//             }else{
//                 resolve(productos)
//             }
//         },1500)
//     })
// }

// export const getOneProduct = (id) =>{
//     let error = false
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             if(error){
//                 reject('Hubo un problema')
//             }else{
//                 let product = productos.find((item)=> item.id === id)
//                 resolve(product)
//             }
//         }, 1900)
//     })
// }

