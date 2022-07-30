import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FileBody } from './FileBody';
import { FileHeader } from './FileHeader';

export const FilesTable = () => {
  const [header, setHeader] = useState(['File Name', 'Text', 'Number', 'Hex']);   // header's columns for table
  const { data } = useSelector( state => state.files );

  return (
    <div className='animate__animated animate__backInUp'>
      <Table striped bordered hover responsive="sm">
        
        <FileHeader columns={header} />
        
        <FileBody data={data}/>
      
      </Table>
    </div>
  )
}
