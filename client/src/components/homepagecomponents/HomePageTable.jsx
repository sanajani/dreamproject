import { Link } from 'react-router-dom'
import { useState } from 'react'
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
    <div>
      <div className='text-right overflow-auto overflow-x-scroll md:overflow-x-hidden px-4 max-h-fit bg-blue-500'>
        <table className='font-persionFont text-white w-full'>
          <thead className=' bg-red-400 text-lg my-10'>
            {
                table.getHeaderGroups().map(headerGroup => {
                   return <tr key={headerGroup?.id}>
                        {
                            headerGroup.headers.map((header) => {
                               return <td key={header?.id}>{flexRender(header.column.columnDef.header, header.getContext())}</td>
                            })
                        }
                    </tr>
                })
            }
          </thead>
          <tbody>
            {
                table.getRowModel().rows.map((row) => {
                    return <tr key={row?.id}>
                        {
                            row.getVisibleCells().map(cell => {
                              return  <td key={cell?.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            })
                        }
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
      <div className='flex justify-between m-4 font-persionFont'>
        {/* <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className={`${!table.getCanPreviousPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500' } px-2 hover:bg-blue-700 text-white sm:w-fit md:px-10 sm:px-7 sm:py-2 text-sm md:text-xl rounded-md sm:font-bold`}>قبلی</button> */}
        {/* <p className='md:text-xl '><span className='mx-2'>{table.getPageCount()}</span> صفحه <span className='mx-2'>{table.getState().pagination.pageIndex + 1}</span> از</p> */}
        {/* <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className={`${!table.getCanNextPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500'} hover:bg-blue-700 text-white w-fit md:px-10 px-2 sm:px-7 sm:py-2 text-sm md:text-xl rounded-md font-bold`}>بعدی</button> */}
      </div>
    </div>
  )
}

export default HomePageTable
