import Pagina from '@/components/Pagina'
import medicoValidator from '@/validators/medicoValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { mask } from 'remask'

const form = () => {
  
  const { push } = useRouter()
  const {register, handleSubmit, setValue, formState:{errors}} = useForm()

  function salvar (dados) {
    axios.post('/api/medicos', dados)
    push('/medicos') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }

  const onSubmit = (e) => {}
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue('address', data.logradouro)
      setValue('neighborhood', data.bairro)
      setValue('city', data.localidade)
      setValue('uf', data.uf)
    });
  }
  
  return (
    <Pagina titulo="Medicos">

      <Form onSubmit={handleSubmit(onSubmit)}>
      <Row> 
      <Form.Group as={Col} md="5"  controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', medicoValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group as={Col} md="2"  controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" mask= "999.999.999-99" {...register('cpf', medicoValidator.cpf)} onChange={handleChange}/>
            {
              errors.cpf &&
              <small className='text-danger'>{errors.cpf.message}</small>
            }
          </Form.Group>
         
          <Form.Group as={Col} md="2" controlId="salario">
           <Form.Label>Salario: </Form.Label>
           <Form.Control type="text" mask= "R$ 99.999" {...register('salario', medicoValidator.salario)} onChange={handleChange}/>
            {
              errors.salario &&
              <small className='text-danger'>{errors.salario.message}</small>
            }
          </Form.Group>
         
          <Form.Group as={Col} md="3" className='mt-2' controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email', medicoValidator.email)}/>
            {
              errors.email &&
              <small className='text-danger'>{errors.email.message}</small>
            }
          </Form.Group>
         
          <Form.Group as={Col} md="2" className='mt-2' controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" mask= "(99) 99999-9999" {...register('telefone', medicoValidator.telefone)} onChange={handleChange}/>
            {
              errors.telefone &&
              <small className='text-danger'>{errors.telefone.message}</small>
            }
          </Form.Group>
         
          <Form.Group as={Col} md="2" className='mt-2' controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" {...register('cep')} onBlur={checkCEP}/>
          </Form.Group>
         
          <Form.Group as={Col} md="2" className='mt-2'  controlId="address">
           <Form.Label>Rua: </Form.Label>
           <Form.Control type="text" {...register("address")}/>
          </Form.Group> 
          
          <Form.Group as={Col} md="2" className='mt-2' controlId="addressNumber">
           <Form.Label>Numero: </Form.Label>
           <Form.Control type="text" {...register('addressNumber')}/>
          </Form.Group> 
          
          <Form.Group as={Col} md="2" className='mt-2' controlId="neighborhood">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text" {...register('neighborhood')}/>
          </Form.Group> 
          
          <Form.Group as={Col} md="2" className='mt-2' controlId="city">
           <Form.Label>Cidade: </Form.Label>
           <Form.Control type="text" {...register('city')}/>
          </Form.Group>
         
          <Form.Group as={Col} md="2" className='mt-2' controlId="uf">
           <Form.Label>Estado: </Form.Label>
           <Form.Control type="text" {...register('uf')}/>
          </Form.Group>
         
         <div className='text-center mt-2'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/professores'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      </Row> 
      </Form>

    </Pagina>
  )
}

export default form
