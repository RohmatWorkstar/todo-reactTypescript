import { ChangeEvent, useState } from "react";

type newTasktodo = {
    Addtodo: (addtodo: string) => void;
};

const Todoinput = ({ Addtodo }: newTasktodo) => {
    const [Newtodo, setNewtodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewtodo(e.target.value);
    };

    const newtask = () => {
        if (Newtodo.trim()) {
            Addtodo(Newtodo);
        }
        setNewtodo("");
    };

    return (
        <div className="flex mb-4 gap-2">
            <input onChange={handleChange} value={Newtodo} type="text" name="" id="" className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:outline-none focus:ring-2 border-teal-500" />
            <button onClick={newtask} className="bg-teal-500 hover:bg-teal-700 text-white font-bold p-3 rounded-md cursor-pointer">
                Add
            </button>
        </div>
    );
};

export default Todoinput;
