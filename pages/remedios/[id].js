import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'

const form = () => {
  
  const { push, query } = useRouter()
  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
  
  if (query.id) {
                                    
    
    axios.get('/api/remedios/' + query.id).then(resultado=>{
      const remedio = resultado.data

    for(let atributo in remedio){
      setValue(atributo, remedio[atributo])
     
    }
  })
}
  }, [query.id])

  function salvar (dados) {
    
    axios.put('/api/remedios/' + dados.id, dados)
    push('/remedios') 
  }
  
  return (
    <Pagina titulo="Remedios">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome')}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="preco">
           <Form.Label>Preço: </Form.Label>
           <Form.Control type="text" {...register('preco')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="data_validade">
           <Form.Label>Data de Validade: </Form.Label>
           <Form.Control type="text" {...register('data_validade')}/>
          </Form.Group>
         
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/cursos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
