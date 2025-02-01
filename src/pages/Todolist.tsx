import { useState } from "react";
import Todoinput from "../components/Todoinput";
import Todoitem from "../components/Todoitem";
import { todo } from "../types/todo";

const Todolist = () => {
    const [Todos, setTodos] = useState<todo[]>([
        {
            id: 1,
            text: "Jalan-jalan taman",
            completed: true,
        },
        {
            id: 2,
            text: "Jalan-jalan Kota",
            completed: false,
        },
        {
            id: 3,
            text: "Jajan",
            completed: false,
        },
    ]);

    const addTodo = (newtask: string) => {
        const newtodo = {
            id: Todos.length + 1,
            text: newtask,
            completed: false,
        };
        setTodos([...Todos, newtodo]);
    };

    const handleCompleted = (id: number) => {
        setTodos((prevtodo) => prevtodo.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const handleDelete = (id: number) => {
        setTodos((prev) => prev.filter((del) => del.id !== id));
    };
    return (
        <div className="min-h-screen flex bg-gradient-to-r from-blue-500 to-teal-500 items-center justify-center">
            <div className="w-full max-w-md rounded-lg shadow-lg bg-white p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">TODO LIST</h1>
                <Todoinput Addtodo={addTodo} />
                <ul className="space-y-4">
                    {Todos.map((item, id) => {
                        return <Todoitem onDelete={handleDelete} todos={item} Ontoggle={handleCompleted} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Todolist;
