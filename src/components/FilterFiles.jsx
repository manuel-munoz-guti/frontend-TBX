import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { setClearResponse, startLodingFile } from '../store/files/';
import { setNotTyping, setTyping } from '../store/ui/uiSlice';

export const FilterFiles = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onChangeValue = ({target}) => {
    setFilter(target.value);
    dispatch( setTyping() );
    dispatch( setClearResponse() );
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch( setNotTyping() );
    if(!filter) return ;
    dispatch( startLodingFile(filter) );
    setFilter('');
  }

  return (
    <Container className="p-3">
      <h6 className="header animate__animated animate__backInLeft" style={{ color: 'white'}}>File Filter:</h6>
      <Form onSubmit={onSubmitForm}>
        <Form.Control 
          size="sm" 
          type="text" 
          placeholder="Enter the file name to search" 
          className='animate__animated animate__backInLeft' 
          style={{ width: '30%' }}
          name='filter'
          value={ filter }
          onChange={ onChangeValue }
          />
      </Form>
    </Container>
  )
}
