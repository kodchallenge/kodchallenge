import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className=''>
        <Table className='min-w[500px] overflow-auto'>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i} >
                <TableCell>
                  <p className={["text-success", "text-destructive", "text-warning", "text-warning", "text-destructive", "text-warning"][i % 6]}>
                    {
                      ["Accepted", "Wrong Answer", "Time Limit Exceeded", "Memory Limit Exceeded", "Runtime Error", "Compile Error"][i % 6]
                    }
                  </p>
                </TableCell>
                <TableCell>
                  {["C++", "Java", "Python"][i % 3]}
                </TableCell>
                <TableCell>
                  {["10 Temmuz 2023", "11 Temmuz 2023", "12 Temmuz 2023"][i % 3]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default page