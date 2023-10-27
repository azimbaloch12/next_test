import Link from 'next/link';
import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const List = (props) => {
    let data = props.data;

    return (
        <div className='max-w-screen-md ml-72 p-4'>
            <h1>{ Math.random() }</h1>
            <table className="table-fixed border-collapse border border-slate-500">
                <thead>
                    <tr className='text-left'>
                        <th className='border border-slate-600 p-2'>ID</th>
                        <th className='border border-slate-600 p-2'>Name</th>
                        <th className='border border-slate-600 p-2'>Created Date</th>
                        <th className='border border-slate-600 p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td className='border border-slate-600 p-2'>{index+1}</td>
                            <td className='border border-slate-600 p-2'>{value}</td>
                            <td className='border border-slate-600 p-2'>24-10-2023</td>
                            <td className='border border-slate-600 p-3 flex'>
                                <Link href='/'>
                                    <AiOutlineEdit />
                                </Link>
                                <Link href='/'>
                                    <AiOutlineDelete />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;