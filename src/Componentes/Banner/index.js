import "./Banner.css"

function Banner() {
    return <div className="Banner">
        <div className="Principal">
            <img src="/img/fondo.png" alt="Fondo" className="Fondo" />
        </div>
        <div className="Main">
            <div className="Container">
                <div className="Container_text">
                    <h1 className="Categoria">Front End</h1>
                    <h2 className="Titulo">Challenge React</h2>
                    <p className="Contenido">Este challenge es una forma de aprendizaje. 
                                             Es un mecanismo donde podrás comprometerte en la resolución de 
                                             un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </div>
                <img src="/img/player.png" alt="Player" className="Player" />
            </div>
        </div>
    </div>
}

export default Banner