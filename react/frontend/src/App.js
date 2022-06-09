import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import BookList from "./components/BookList";
import Header from "./components/Header/Header";

import axios from "axios";

function App() {
    const [todos, setTodos] = useState(null);
    const [books, setBooks] = useState(null);

    const onUpdateTodo = (todo) => {
        const todoItemIndex = todos.findIndex((x) => x.id === todo.id);
        const newTodos = [...todos];

        const newTodo = newTodos[todoItemIndex];
        newTodo.completed = !newTodo.completed;
        newTodos[todoItemIndex] = newTodo;
        setTodos(newTodos);
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/").then((result) => {
            setBooks(result.data);
            console.table(result.data);
        });
    }, []); //[] only fires one time when the compent loads

    const refreshList = () => {
        axios
            .get("http://localhost:8000/api/books/")
            .then((res) => {
                setBooks(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Header />
            <div
                style={{
                    display: "grid",
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {books ? (
                    <BookList
                        books={books}
                        todos={todos}
                        onUpdateTodo={onUpdateTodo}
                        refreshList={refreshList}
                    />
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
}

export default App;
