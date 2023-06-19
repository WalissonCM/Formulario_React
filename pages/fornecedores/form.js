import Pagina from '@/components/Pagina'
import fornecedorValidator from '@/validators/fornecedorValidator'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { mask } from 'remask'

const form = () => {
  
  const { push } = useRouter()
  const {register, handleSubmit, setValue, formState:{errors}} = useForm()

  function salvar (dados) {
    axios.post('/api/fornecedores', dados)
    push('/fornecedores') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Fornecedores">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', fornecedorValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="cnpj">
           <Form.Label>Cnpj: </Form.Label>
           <Form.Control type="text" mask= "99.999.999/0001-99" {...register('cnpj', fornecedorValidator.cnpj)} onChange={handleChange}/>
            {
              errors.cnpj &&
              <small className='text-danger'>{errors.cnpj.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email', fornecedorValidator.email)}/>
            {
              errors.email &&
              <small className='text-danger'>{errors.email.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" mask= "(99) 99999-9999" {...register('telefone', fornecedorValidator.telefone)} onChange={handleChange}/>
            {
              errors.telefone &&
              <small className='text-danger'>{errors.telefone.message}</small>
            }
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="estado">
           <Form.Label>Estado: </Form.Label>
           <Form.Control type="text" {...register('estado', fornecedorValidator.estado)}/>
            {
              errors.estado &&
              <small className='text-danger'>{errors.estado.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" mask= "99.999-999" {...register('cep', fornecedorValidator.cep)} onChange={handleChange}/>
            {
              errors.cep &&
              <small className='text-danger'>{errors.cep.message}</small>
            }
          </Form.Group>
         
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/professores'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
