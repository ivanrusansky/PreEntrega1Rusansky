const Item = ({item}) => {
    return (
        <div className="col-md-4">
            <div className="card border-0"> 
                <img src={item.image} className="card-img-top" alt={item.title}/>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">${item.price}</p>
                    </div>
            </div>
            </div>

    )
}


export default Item