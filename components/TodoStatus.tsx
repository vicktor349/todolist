import React from 'react'

interface TodoStatusProps {
    activeComponent: string;
    setActiveComponent: (component: string) => void
}

const TodoStatus = ({ activeComponent, setActiveComponent }: TodoStatusProps) => {
    const menuLists = [
        { id: 1, location: "All" },
        { id: 2, location: "Completed" },
        { id: 3, location: "Pending" }
    ]
    return (
        <div className='flex justify-between pt-5'>
            {menuLists.map((list) => {
                return (
                    <div
                        onClick={() => setActiveComponent(list.location)}
                        className={`rounded-md hover:cursor-pointer border border-gray-600 w-[124px] h-[40px] flex items-center justify-center text-[#5C5C5C] ${activeComponent === list.location ? 'bg-[#CFCFCF]' : ''}`}
                        key={list.id}>
                        <p className={`${activeComponent === list.location ? 'text-white' : ''}`}>{list.location}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoStatus