import react from "react";

const Bookproto = ({ item, key, handleDelete, editItem }) => {
    return (
        <div className="container" key={item.id} style={{ minWidth: "400px" }}>
            <div>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                </div>
                <div>
                    <p>{item.author}</p>
                    <p>{item.publication_date}</p>
                    <p>{item.number_pages}</p>
                </div>
            </div>
            <button
                className="btn btn-secondary mr-2"
                onClick={() => editItem(item)}
            >
                Edit
            </button>
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
            >
                Delete
            </button>
        </div>
    );
};

export default Bookproto;
