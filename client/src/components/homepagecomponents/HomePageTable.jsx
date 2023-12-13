// import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { data } from '../../utils/mock_data'
import {flexRender,getCoreRowModel,useReactTable} from '@tanstack/react-table'
import { columns } from '../../utils/tanstacktable/columnHelper'

// HomePageTable Component
const HomePageTable = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
  return (
    <div className='max-w-[1100px] mx-auto'>
      <div className='w-full overflow-auto overflow-x-scroll md:overflow-x-hidden px-4 max-h-fit '>
        <table className='min-w-[700px] md:w-full text-white bg-blue-500 p-6'>
          <thead className="">
            {
                table.getHeaderGroups().map(headerGroup => {
                   return <tr key={headerGroup?.id} className=''>
                        {
                            headerGroup.headers.map((header) => {
                               return <td className='font-semibold md:font-bold sm:text-base md:textxl p-4 text-base border-2' key={header?.id}>{flexRender(header.column.columnDef.header, header.getContext())}</td>
                            })
                        }
                    </tr>
                })
            }
          </thead>
          <tbody>
            {
                table.getRowModel().rows.map((row,index) => {
                    return <tr key={row?.id} 
                    className={`
                    ${index % 2 === 0 ? "bg-blue-800" : "bg-blue-900"} text-white min-w-full my-1 border
                    `}
                    >
                        {
                            row.getVisibleCells().map(cell => {
                              return  <td key={cell?.id} className='p-4'>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            })
                        }
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
      <div className='flex justify-between m-4 font-persionFont'>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className={`${!table.getCanPreviousPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500' } px-2 hover:bg-blue-700 text-white sm:w-fit md:px-10 sm:px-7 sm:py-2 text-sm md:text-xl rounded-md sm:font-bold`}>قبلی</button>
        <p className='md:text-xl text-sm'><span className='mx-2'>{table.getPageCount()}</span> صفحه <span className='mx-2'>{table.getState().pagination.pageIndex + 1}</span> از</p>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className={`${!table.getCanNextPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500'} hover:bg-blue-700 text-white w-fit md:px-10 px-2 sm:px-7 sm:py-2 text-sm md:text-xl rounded-md font-bold`}>بعدی</button>
      </div>
    </div>
  )
}

export default HomePageTable