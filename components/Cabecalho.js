import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="/"><img src="https://i.pinimg.com/564x/50/c3/76/50c3760c4f9fd7df41c5d40e3a72b259.jpg" alt="Logo" width="150" height="150"></img></Navbar.Brand>
          <Nav className="me-auto mt-5 ">
            <Nav.Link className='mt-5' href="/exames"><h4><u>Exames</u></h4></Nav.Link>
            <Nav.Link className='mt-5'href="/clientes"><h4><u>Clientes</u></h4></Nav.Link>
            <Nav.Link className='mt-5'href="/medicos"><h4><u>Medicos</u></h4></Nav.Link>
            <Nav.Link className='mt-5'href="/remedios"><h4><u>Remedios</u></h4></Nav.Link>
            <Nav.Link className='mt-5'href="/fornecedores"><h4><u>Fornecedores</u></h4></Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Cabecalho