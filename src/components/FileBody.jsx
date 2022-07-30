import React from 'react'
import { FileRow } from './FileRow'

export const FileBody = ({data}) => {
  return (
    <tbody>
        {
            data.map( (element) => (
               element.lines.map( (line) => (
                 <FileRow key={line.hex} line={line} fileName={element.file}/>
               ))
            ))
        }
    </tbody>
  )
}
