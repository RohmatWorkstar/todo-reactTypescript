import { todo } from "../types/todo";

type TodoTypes = {
    todos: todo;
    Ontoggle: (id: number) => void;
    onDelete: (id: number) => void;
};

const Todoitem = ({ todos, Ontoggle, onDelete }: TodoTypes) => {
    const { text, completed, id } = todos;
    return (
        <li className={`${completed ? `bg-gray-200 line-through text-gray-00` : `bg-teal-300 text-black`} flex justify-between items-center p-2 font-medium rounded-lg shadow-md`}>
            <span className="cursor-pointer" onClick={() => Ontoggle(id)}>
                {text}
            </span>
            <button onClick={() => onDelete(id)} className=" text-red-500 cursor-pointer">
                Delete
            </button>
        </li>
    );
};

export default Todoitem;
