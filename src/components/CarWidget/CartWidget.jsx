import * as Icon from 'react-bootstrap-icons';
import './styles-CartWidget.css';

const CartWidget = () => {
    return (
        
        <div className='carrito-container'>

            <Icon.Cart2 />&nbsp;

            <span>0</span>

        </div>
    )
}

export default CartWidget