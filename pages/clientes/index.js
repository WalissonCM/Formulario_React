import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'

const index = () => {
  
  const [clientes, setClientes] = useState([])

  useEffect(()=>{
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/clientes').then(resultado=>{
      setClientes(resultado.data)
  })
}

  function excluir(id) {
   
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/clientes/' + id)
      getAll()
   }
}

  return (
    <Pagina titulo="Clientes">

      <Link href={'/clientes/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>   
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Cep</th>
              <th>Rua</th>
              <th>Número</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Tipo de Animal</th>
              <th>Raça</th>
              <th>Peso</th>
            </tr>     
            </thead>
            
            <tbody>
             {clientes.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/clientes/' + item.id}>
                  <FaEdit className='me-2 text-black'/>
                  </Link>
                  <FiDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.cep}</td>
                <td>{item.address}</td>
                <td>{item.addressNumber}</td>
                <td>{item.neighborhood}</td>
                <td>{item.city}</td>
                <td>{item.uf}</td>
                <td>{item.tipo_animal}</td>
                <td>{item.raca}</td>
                <td>{item.peso}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index