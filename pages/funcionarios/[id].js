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
                                    
    
    axios.get('/api/funcionarios/' + query.id).then(resultado=>{
      const funcionario = resultado.data

    for(let atributo in funcionario){
      setValue(atributo, funcionario[atributo])
     
    }
  })
}
  }, [query.id])

  function salvar (dados) {
    
    axios.put('/api/funcionarios/' + dados.id, dados)
    push('/funcionarios') 
  }
  
  return (
    <Pagina titulo="Funcionarios">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome')}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" {...register('cpf')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="funcao">
           <Form.Label>Funcao: </Form.Label>
           <Form.Control type="text" {...register('funcao')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="salario">
           <Form.Label>Salario: </Form.Label>
           <Form.Control type="text" {...register('salario')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" {...register('telefone')}/>         
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" {...register('cep')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="logradouro">
           <Form.Label>Logradouro: </Form.Label>
           <Form.Control type="text" {...register('logradouro')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="complemento">
           <Form.Label>Complemento: </Form.Label>
           <Form.Control type="text" {...register('complemento')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Numero: </Form.Label>
           <Form.Control type="text" {...register('numero')}/>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text" {...register('bairro')}/>
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
