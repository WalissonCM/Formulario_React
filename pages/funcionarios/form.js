import Pagina from '@/components/Pagina'
import funcionarioValidator from '@/validators/funcionarioValidator'
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
    axios.post('/api/funcionarios', dados)
    push('/funcionarios') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Funcionarios">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', funcionarioValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" mask= "999.999.999-99" {...register('cpf', funcionarioValidator.cpf)} onChange={handleChange}/>
            {
              errors.cpf &&
              <small className='text-danger'>{errors.cpf.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="funcao">
           <Form.Label>Funcao: </Form.Label>
           <Form.Control type="text" {...register('funcao', funcionarioValidator.funcao)}/>
            {
              errors.funcao &&
              <small className='text-danger'>{errors.funcao.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="salario">
           <Form.Label>Salario: </Form.Label>
           <Form.Control type="text" mask= "R$ 99.999,00" {...register('salario', funcionarioValidator.salario)} onChange={handleChange}/>
            {
              errors.salario &&
              <small className='text-danger'>{errors.salario.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email', funcionarioValidator.email)}/>
            {
              errors.email &&
              <small className='text-danger'>{errors.email.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" mask= "(99) 99999-9999" {...register('telefone', funcionarioValidator.telefone)} onChange={handleChange}/>
            {
              errors.telefone &&
              <small className='text-danger'>{errors.telefone.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" mask= "99.999-999" {...register('cep', funcionarioValidator.cep)} onChange={handleChange}/>
            {
              errors.cep &&
              <small className='text-danger'>{errors.cep.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="logradouro">
           <Form.Label>Logradouro: </Form.Label>
           <Form.Control type="text" {...register('logradouro', funcionarioValidator.logradouro)}/>
            {
              errors.logradouro &&
              <small className='text-danger'>{errors.logradouro.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="complemento">
           <Form.Label>Complemento: </Form.Label>
           <Form.Control type="text" {...register('complemento', funcionarioValidator.complemento)}/>
            {
              errors.complemento &&
              <small className='text-danger'>{errors.complemento.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Numero: </Form.Label>
           <Form.Control type="text" {...register('numero', funcionarioValidator.numero)}/>
            {
              errors.numero &&
              <small className='text-danger'>{errors.numero.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text" {...register('bairro', funcionarioValidator.bairro)}/>
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
