import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiDelete } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'

const index = () => {
  
  const [exames, setExames] = useState([])

  useEffect(()=>{
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/exames').then(resultado=>{
      setExames(resultado.data)
  })
}

  function excluir(id) {
   
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/exames/' + id)
      getAll()
   }
}

  return (
    <Pagina titulo="Exames">
    
      <Link href={'/exames/form'} className="btn btn-primary my-2">Novo</Link>
      
      <Table striped bordered hover>
            
            <thead>   
            <tr>
              <th></th>
              <th>Tipo de Exame</th>
              <th>Data</th>
            </tr>     
            </thead>
            
            <tbody>
             {exames.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/exames/' + item.id}>
                  <FaEdit className='me-2 text-black'/>
                  </Link>
                  <FiDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.tipo_exame}</td>
                <td>{item.data}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index