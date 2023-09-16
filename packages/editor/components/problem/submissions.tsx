import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@kod/ui'

const submissions = () => {
    const submissions: any[] = []
    return (
        <div className='h-full overflow-y-auto'>
            <Table className='min-w[500px] overflow-auto'>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Durum
                        </TableHead>
                        <TableHead>
                            Dil
                        </TableHead>
                        <TableHead>
                            Tarih
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {submissions.map((solution, i) => (
                        <TableRow key={i} >
                            <TableCell>
                                Başarılı
                            </TableCell>
                            <TableCell>
                                {solution.language.name}
                            </TableCell>
                            <TableCell>
                                19 aralık 2023
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default submissions