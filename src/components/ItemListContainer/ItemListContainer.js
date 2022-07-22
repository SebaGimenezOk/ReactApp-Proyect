
import ItemProducts from "../ItemProducts/ItemProducts"

const ItemContainer=({section})=>{
    return(
        <div className="item-container">
         <h1 className="title-sections">{section}</h1>
        <ItemProducts title='reggiano' price={1500} img={'reggiano.png'}/>
        <ItemProducts title='holanda' price={1700} img={'holanda.png'}/>
        <ItemProducts title='sobre' price={900} img={'sobre.png'}/>
        </div>
    )
}
export default ItemContainer