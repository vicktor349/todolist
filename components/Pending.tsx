import { Checkbox } from '@mantine/core'
import React, { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'



const data = [
    { id: 1, task: "Pending Task" },
    { id: 2, task: "Pending Task" },
    { id: 3, task: "Pending Task" },
    { id: 4, task: "Pending Task" },
    { id: 5, task: "Pending Task" },
    { id: 6, task: "Pending Task" },
    { id: 7, task: "Pending Task" },
    { id: 8, task: "Pending Task" }
]



const Pending = () => {
    const [pendingTasks, setPendingTasks] = useState(data)
    const handleDelete = (id: number) => {
        const updatedTask = pendingTasks.filter(pendingTask => pendingTask.id !== id)
        setPendingTasks(updatedTask)
    }
    return (
        <div>{pendingTasks.map((task) => {
            return (
                <div key={task.id} className='border border-gray-500 my-5'>
                    <div className='flex items-center justify-between mx-5'>
                        <section className='flex items-center py-3 space-x-3'>
                            <Checkbox />
                            <p>{task.task}</p>
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
        })}</div>
    )
}

export default Pending