const ItemListContainer = ({texto}) =>{
    return(
        <div className="container">
        <div className="row">
            <div className="col">
            <h1 className="text-center" style={{color:"black", fontSize: 100}}>{texto}</h1>
            </div>
        </div>
        </div>

    )
}

export default ItemListContainer