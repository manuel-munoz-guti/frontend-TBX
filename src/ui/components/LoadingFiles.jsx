import React, { useEffect, useState } from 'react'
import { Container, ProgressBar } from 'react-bootstrap'

export const LoadingFiles = () => {

  const [now, setNow] = useState(0);
  
  useEffect(() => {
    for(let i=0; i<4; i++){
      setTimeout( () => {
        setNow( prev => prev + 25);
      }, 300);
    }
  }, [])
  

  return (
    <div>
      <Container className='my-5 py-5'>

        <ProgressBar animated now={now} label={`${now}%`} visuallyHidden />
        Loading({`${now/2}%`})...

      </Container>
    </div>
  )
}
