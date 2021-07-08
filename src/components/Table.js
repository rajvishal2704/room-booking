import React from 'react'
import { TableBody, TableHead } from './TableHeadBody';

const Table = ({theadData, tbodyData}) => {
    return (
        <table>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHead itee={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((ite) => {
                    return <TableBody key={ite.id} data={ite.items} />;
                })}
            </tbody>
        </table>
    )
}

export default Table
