
import './ItemProducts.scss'

const ItemProducts = ({title,price,img}) => {
    
    return (
        <div className="Item-Products">
            <img className ="caja-foto"  src={`./assets/${img}`} alt="imagen producto" />
            <p className="P-Products">{title}</p>
            <span className='P-Precios'> $ {price}  </span>
            <button> comprar </button>
        </div>

    );
}
export default ItemProducts;