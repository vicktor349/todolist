import React, { useState } from 'react'
import { Checkbox, CheckboxProps } from "@mantine/core"
import { MdEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

const data = [
    { id: 1, task: "Hello world", checked: false },
    { id: 2, task: "Hello world", checked: false },
    { id: 3, task: "Hello world", checked: false },
    { id: 4, task: "Hello world", checked: false },
    { id: 5, task: "Hello world", checked: false },
    { id: 6, task: "Hello world", checked: false },
    { id: 7, task: "Hello world", checked: false },
    { id: 8, task: "Hello world", checked: false }
];



const AllTask = () => {
    const [tasks, setTasks] = useState(data)
    const [checkbox, setCheckBox] = useState<boolean>(false)


    const handleDelete = (id: number) => {
        const updatedTask = tasks.filter(task => task.id !== id)
        setTasks(updatedTask)
    }

    const handleCheckboxChange = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, checked: !task.checked } : task
        );
        setTasks(updatedTasks);
    };
    return (
        <div>
            {tasks.map((task) => {
                { console.log(checkbox) }
                return (
                    <div key={task.id} className='border border-gray-500 my-5'>
                        <div className='flex items-center justify-between mx-5'>
                            <section className='flex items-center py-3 space-x-3'>
                                <Checkbox checked={task.checked} onChange={() => handleCheckboxChange(task.id)} />
                                <p className={`${task.checked ? 'line-through' : ''}`}>{task.task}</p>
                            </section>
                            <section className='flex items-center py-3 space-x-3'>
                                <div className='h-7 w-7 bg-[#0085FF]  text-white flex items-center justify-center rounded-md hover:cursor-pointer'>
                                    <MdEdit />
                                </div>
                                <div onClick={() => handleDelete(task.id)} className='flex items-center justify-center text-white bg-[#FF0000] rounded-md h-7 w-7 hover:cursor-pointer'>
                                    <IoTrashOutline />
                                </div>
                            </section>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllTask