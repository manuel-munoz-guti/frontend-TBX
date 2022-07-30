import React from 'react'

export const FileHeader = ({ columns }) => {

  return (
    <thead>
      <tr>
        {
            columns.map( (column) => (
                <th key={column}> {column} </th>
            ))
        }
      </tr>
    </thead>
  )
}
