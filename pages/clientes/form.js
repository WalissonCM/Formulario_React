import Pagina from '@/components/Pagina'
import clienteValidator from '@/validators/clienteValidator'
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
    axios.post('/api/clientes', dados)
    push('/clientes') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Clientes">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', clienteValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" mask= "999.999.999-99" {...register('cpf', clienteValidator.cpf)} onChange={handleChange}/>
            {
              errors.cpf &&
              <small className='text-danger'>{errors.cpf.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email', clienteValidator.email)}/>
            {
              errors.email &&
              <small className='text-danger'>{errors.email.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" mask= "(99) 99999-9999" {...register('telefone', clienteValidator.telefone)} onChange={handleChange}/>
            {
              errors.telefone &&
              <small className='text-danger'>{errors.telefone.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" mask= "99.999-999" {...register('cep', clienteValidator.cep)} onChange={handleChange}/>
            {
              errors.cep &&
              <small className='text-danger'>{errors.cep.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="logradouro">
           <Form.Label>Logradouro: </Form.Label>
           <Form.Control type="text" {...register('logradouro', clienteValidator.logradouro)}/>
            {
              errors.logradouro &&
              <small className='text-danger'>{errors.logradouro.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="complemento">
           <Form.Label>Complemento: </Form.Label>
           <Form.Control type="text" {...register('complemento', clienteValidator.complemento)}/>
            {
              errors.complemento &&
              <small className='text-danger'>{errors.complemento.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Numero: </Form.Label>
           <Form.Control type="text" mask="999" {...register('numero', clienteValidator.numero)} onChange={handleChange}/>
            {
              errors.numero &&
              <small className='text-danger'>{errors.numero.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text" {...register('bairro', clienteValidator.bairro)}/>
            {
              errors.bairro &&
              <small className='text-danger'>{errors.bairro.message}</small>
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
