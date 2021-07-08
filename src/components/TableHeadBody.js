import React from 'react'


const TableHead = ({ itee }) => {
    return (
        <td title={itee}>
            {itee}
        </td>
    )
}

const TableBody = ({ data }) => {
    return (
        <tr>
            {data.map((ite) => {
                return <td key={ite}>{ite}</td>;
            })}
        </tr>
    )
}

export {TableHead, TableBody}
