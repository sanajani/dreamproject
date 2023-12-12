import {createColumnHelper} from '@tanstack/react-table'

const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.accessor("name",{
        header: "Full Name"
    }),
    columnHelper.accessor('lastname',{
        header: "Last Name"
    }),
    columnHelper.accessor("location",{
        header: "Location"
    }),
    columnHelper.accessor("job",{
        header:"job"
    })
]