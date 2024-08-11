import { Link } from "react-router-dom";

const Item = ({ item }) => {
    
    const cardStyle = {
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        marginBottom: "20px",
        backgroundColor: "#fff",
    };

    const imageStyle = {
        width: "100%",
        height: "200px",  
        objectFit: "cover",
    };

    const bodyStyle = {
        padding: "16px",
        textAlign: "center",
    };

    const titleStyle = {
        fontSize: "1.2em",
        fontWeight: "600",
        margin: "0",
        marginBottom: "8px",
        color: "#333",
    };

    const priceStyle = {
        fontSize: "1.1em",
        fontWeight: "500",
        color: "#555",
        margin: "0",
        marginBottom: "12px",
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    };

    return (
        <div className="col-md-4 mb-3">
            <div
                className="card border-0"
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link to={"/item/" + item.id}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={imageStyle}
                    />
                </Link>
                <div className="card-body" style={bodyStyle}>
                    <p className="card-text" style={titleStyle}>{item.title}</p>
                    <p className="card-text" style={priceStyle}>${item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
