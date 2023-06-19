import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

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

      <Link href={'/exames/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>   
            <tr>
              <th></th>
              <th>Tipo de Exame</th>
              <th>Data</th>
              <th>Resultado</th>
            </tr>     
            </thead>
            
            <tbody>
             {exames.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/exames/' + item.id}>
                  <BsFillPencilFill className='me-2 text-primary'/>
                  </Link>
                  <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.tipo}</td>
                <td>{item.data}</td>
                <td>{item.resultado}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index