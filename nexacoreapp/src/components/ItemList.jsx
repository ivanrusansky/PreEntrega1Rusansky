import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {items.length > 0 ? (
                items.map((item) => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <Item item={item} />
                    </div>
                ))
            ) : (
                <p>No items found for this category.</p>
            )}
        </div>
    );
};

export default ItemList;
