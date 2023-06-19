import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Veterinaria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/exames">Exames</Nav.Link>
            <Nav.Link href="/pets">Pets</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            <Nav.Link href="/funcionarios">Funcionarios</Nav.Link>
            <Nav.Link href="/remedios">Remedios</Nav.Link>
            <Nav.Link href="/fornecedores">Fornecedores</Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Cabecalho