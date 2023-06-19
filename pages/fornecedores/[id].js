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
                                    
    
    axios.get('/api/fornecedores/' + query.id).then(resultado=>{
      const fornecedore = resultado.data

    for(let atributo in fornecedore){
      setValue(atributo, fornecedore[atributo])
     
    }
  })
}
  }, [query.id])

  function salvar (dados) {
    
    axios.put('/api/fornecedores/' + dados.id, dados)
    push('/fornecedores') 
  }
  
  return (
    <Pagina titulo="Fornecedores">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome')}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="cnpj">
           <Form.Label>Cnpj: </Form.Label>
           <Form.Control type="text" {...register('cnpj')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" {...register('telefone')}/>         
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="estado">
           <Form.Label>Estado: </Form.Label>
           <Form.Control type="text" {...register('estado')}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" {...register('cep')}/>
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
