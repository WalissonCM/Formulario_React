import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

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
              <th>funcao</th>
              <th>Salário</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Cep</th>
              <th>Logradouro</th>
              <th>Complemento</th>
              <th>Número</th>
              <th>Bairro</th>
            </tr>     
            </thead>
            
            <tbody>
             {medicos.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/medicos/' + item.id}>
                  <BsFillPencilFill className='me-2 text-primary'/>
                  </Link>
                  <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.funcao}</td>
                <td>{item.salario}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>{item.cep}</td>
                <td>{item.logradouro}</td>
                <td>{item.complemento}</td>
                <td>{item.numero}</td>
                <td>{item.bairro}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index