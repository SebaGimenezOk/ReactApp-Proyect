
import './ItemProducts.scss'

const ItemProducts = () => {
    return (
        <div className="Item-Products">
            <img className ="caja-foto"  src="assets/reggiano.png" alt="imagen producto" />
            <p className="P-Products"> producto </p>
            <span className='P-Precios'> $1500  </span>
            <button> comprar </button>
        </div>

    );
}
export default ItemProducts;