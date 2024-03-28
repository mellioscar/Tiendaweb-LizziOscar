function ImageFumigaciones({greeting}) {
    const imageUrl = '../images/Fumigacion-1.jpg'
    const imageUrl2 = '../images/Fumigacion-2.jpg'

    return (
        <div>
            <h1>{greeting}</h1>
            <div style={{display:'flex', justifyContent:"space-around", alignItems:'center'}}>
                <img src={imageUrl} alt="Imagen Fumigaciones 1" style={{borderRadius: "15px"}}/>
                <img src={imageUrl2} alt="Imagen Fumigaciones 2" style={{borderRadius: "15px"}}/>
            </div>
        </div>
    );
}

export default ImageFumigaciones;