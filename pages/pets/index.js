import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'

const index = () => {
  
  const [pets, setPets] = useState([])

  useEffect(()=>{
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/pets').then(resultado=>{
      setPets(resultado.data)
  })
}

  function excluir(id) {
   
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/pets/' + id)
      getAll()
   }
}

  return (
    <Pagina titulo="Pets">

      <Link href={'/pets/form'} className="btn btn-primary mb-2">Novo</Link>

      <Table striped bordered hover>
            
            <thead>   
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Raça/Espécie</th>
              <th>Peso</th>
            </tr>     
            </thead>
            
            <tbody>
             {pets.map( (item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/pets/' + item.id}>
                  <BsFillPencilFill className='me-2 text-primary'/>
                  </Link>
                  <AiOutlineDelete onClick={() => excluir(item.id)} className='text-danger' type='submit' />
                </td>
                <td>{item.nome}</td>
                <td>{item.tipo}</td>
                <td>{item.raça_especie}</td>
                <td>{item.peso}</td>
                </tr>
             ))}     
            </tbody>

      </Table>
  
    </Pagina>    

  )
}

export default index