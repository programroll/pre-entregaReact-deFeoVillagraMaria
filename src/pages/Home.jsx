import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from '../components/ItemCount/ItemCount.jsx';

const Home = () => {
    return (
        <div className="App">
            <ItemListContainer greeting={'Bienvenidos'} />
            <ItemCount />

        </div>
    )
}

export default Home