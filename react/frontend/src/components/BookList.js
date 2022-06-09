import { Button } from "@material-ui/core";
import { useState } from "react";
import Bookproto from "./Bookproto";
import Modal from "./Modal";
import axios from "axios";

const TodoList = ({ books, todos, onUpdateTodo, refreshList }) => {
    const [category, setCategory] = useState(null);
    const [modal, setModal] = useState(false);
    const [activeItem, setActiveItem] = useState({
        name: "",
        category: "",
        author: "",
        publication_date: "",
        number_pages: 0,
    });

    const toggle = () => {
        setModal((modal) => !modal);
    };

    const handleCategory = (e) => {
        if (e.target.value === "") {
            setCategory("All");
        } else {
            setCategory(e.target.value);
        }
    };
    const createItem = () => {
        const item = {
            name: "",
            category: "",
            author: "",
            publication_date: "",
            number_pages: 0,
        };

        setActiveItem(item);
        setModal((modal) => !modal);
        axios
            .get("http://localhost:8000/api/books/")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const editItem = (item) => {
        setActiveItem(item);
        setModal((modal) => !modal);
    };

    // const refreshList = () => {
    //     axios
    //         .get("/api/books/")
    //         .then((res) => {
    //             this.setBooks(res.data);
    //             console.log(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // };

    const handleSubmit = (item) => {
        toggle();

        if (item.id) {
            axios
                .put(`http://localhost:8000/api/books/${item.id}/`, item)
                .then((res) => refreshList());
            return;
        }
        console.log(item);
        axios.post("http://localhost:8000/api/books/", item).then((res) => {
            refreshList();
        });

        alert("save" + JSON.stringify(item));
    };
    const handleDelete = (item) => {
        axios
            .delete(`http://localhost:8000/api/books/${item.id}/`)
            .then((res) => refreshList());
    };

    return (
        <>
            <div className="container">
                <div>
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Category
                    </label>
                    <select
                        placeholder="Select Category"
                        className="form-select"
                        defaultValue={"All"}
                        onChange={(e) => handleCategory(e)}
                    >
                        {books.map((item, i) => (
                            <option key={i} value={item.category}>
                                {item.category}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    {/* <button
                        className="btn btn-secondary"
                        onClick={() => {
                            queryItem();
                        }}
                    >
                        Filter
                    </button> */}
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            createItem();
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <h4>Books</h4>
                <div className="list-group-item">
                    {books.map((item, index) => {
                        return (
                            <div key={index} style={{ padding: "15px" }}>
                                <Bookproto
                                    item={item}
                                    handleDelete={handleDelete}
                                    editItem={editItem}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* <ul className="list-group">
                {books.map((book) => (
                    <li
                        key={book.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {book.name}

                        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdateTodo(todo)}
          /> 
                    </li>
                ))}
            </ul> */}
            {modal ? (
                <Modal
                    activeItem={activeItem}
                    toggle={toggle}
                    onSave={handleSubmit}
                />
            ) : null}
        </>
    );
};

export default TodoList;
