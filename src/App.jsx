import { Col, Container, Row } from 'react-bootstrap';
import { FilesTable } from './components/FilesTable';
import { MyNav } from './components/MyNav';
import { useLoadFiles } from './hooks/useLoadFiles'
import { LoadingFiles } from './ui/components/LoadingFiles';

function App() {
  const { loading } = useLoadFiles();

  return (
    <div>
      <header>
        <MyNav />
      </header>
      <Container>
        <Row>
          <Col>
            <Container className='mt-5 bg-light rounded-3'>
              {
                (loading) ? <LoadingFiles /> : <FilesTable />
              }          
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
