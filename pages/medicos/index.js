import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'

const index = () => {
  
  const [medicos, setMedicos] = useState([])

  useEffect(()=>{
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/medicos').then(resultado=>{
      setMedicos(resultado.data)
  })
}

  function excluir(id) {
    
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/medicos/' + id)
      getAll()
   }
}

  return (
    <Pagina titulo="Medicos">

      <Link href={'/medicos/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>   
            <tr>
            <th></th>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Salário</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Cep</th>
              <th>Rua</th>
              <th>Número</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
            </tr>     
            </thead>
            
            <tbody>
             {medicos.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/medicos/' + item.id}>
                  <FaEdit className='me-2 text-black'/>
                  </Link>
                  <FiDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.salario}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.cep}</td>
                <td>{item.address}</td>
                <td>{item.addressNumber}</td>
                <td>{item.neighborhood}</td>
                <td>{item.city}</td>
                <td>{item.uf}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index