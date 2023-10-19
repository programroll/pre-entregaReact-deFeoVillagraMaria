import CartWidget from "../CarWidget/CartWidget"

const NavBar = () =>{
    return(
    <nav>
        <h1>MUNDO FIT</h1>
        <div>
            <button>ENTRENAMIENTO</button>
            <button>NUTRICIÓN</button>
            <button>INFORMACIÓN</button>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar