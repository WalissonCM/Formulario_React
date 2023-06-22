import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div class="bg-success py-2 text-white text-center mb-3 bg-opacity-75">
        <Container>
          <h1>{props.titulo}</h1>
        </Container >
      </div>
      <Container className='pb-5 mb-5'>
        {props.children}
      </Container>
    </>
  )
}

export default Pagina