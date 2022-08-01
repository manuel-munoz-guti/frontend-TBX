import { Col, Container, Row } from 'react-bootstrap';
import { FilesTable } from './components/FilesTable';
import { FilterFiles } from './components/FilterFiles';
import { MyNav } from './components/MyNav';
import { useLoadFiles } from './hooks/useLoadFiles'
import { ErrorAlert } from './ui/components/ErrorAlert';
import { LoadingFiles } from './ui/components/LoadingFiles';

function App() {
  const { isLoading, response, isTyping } = useLoadFiles();

  return (
    <div>
      <header>
        <MyNav />
        {
          (response.status !== 0 && response.status !== 200 && !isTyping) && <ErrorAlert code={response.code} message={response.message}/>
        } 
      </header>
      <Container className='mt-4 bg-danger rounded-5'>
        <Row>
          <Col>
            {
              (!isLoading) && <FilterFiles />
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className='bg-light rounded-3'>
              {
                (isLoading) ? <LoadingFiles /> : <FilesTable />
              }          
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
