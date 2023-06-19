import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

const index = () => {
  
  const [remedios, setRemedios] = useState([])

  useEffect(()=>{
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/remedios').then(resultado=>{
      setRemedios(resultado.data)
  })
}

  function excluir(id) {
    
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/remedios/' + id)
      getAll()
   }
}

  return (
    <Pagina titulo="Remedios">

      <Link href={'/remedios/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>   
            <tr>
            <th></th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Data de Validade</th>
            </tr>     
            </thead>
            
            <tbody>
             {remedios.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/remedios/' + item.id}>
                  <BsFillPencilFill className='me-2 text-primary'/>
                  </Link>
                  <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.nome}</td>
                <td>{item.preco}</td>
                <td>{item.data_validade}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index