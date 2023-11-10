import CartWidget from "../CarWidget/CartWidget"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import './styles.css'


const NavBar = () =>{

    return(
    <nav>
        <div className="navbar-container">
            <img src={'./images/corazon.webp'} alt="cart-wdiget" width={'25px'}/>
            <h1>MUNDO FIT</h1>
        </div>
        
        <div>
            <div className="button-container">
                <ButtonComponent label="ENTRENAMIENTO"/>
                <ButtonComponent label="NUTRICIÓN"/>
                <ButtonComponent label="INFORMACIÓN"/>
                <CartWidget/>
            </div>
            
        </div>
    </nav>
    )
}

export default NavBar