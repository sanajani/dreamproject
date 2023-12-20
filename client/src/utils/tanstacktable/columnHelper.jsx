import {createColumnHelper} from '@tanstack/react-table'

const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.accessor("email",{
        header: "ایمیل آدرس"
    }),
    columnHelper.accessor("job",{
         header:"وظیفه"
    }),
    columnHelper.accessor("province",{
        header: "ولایت"
    }),
    columnHelper.accessor('lastName',{
        header: "تخلص"
    }),
    columnHelper.accessor("name",{
        header: "نام"
    }),
]