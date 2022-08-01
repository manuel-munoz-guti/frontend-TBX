import React from 'react'
import { Alert } from 'react-bootstrap'

export const ErrorAlert = ({ message , code }) => {
  return (
    <Alert variant='danger' className='animate__animated animate__flash'>
          Opps! something went wrong, contact the Administrator. CODE {code}: ({message}  )
    </Alert>
  )
}
