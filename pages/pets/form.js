import Pagina from '@/components/Pagina'
import petValidator from '@/validators/petValidator'

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
    axios.post('/api/pets', dados)
    push('/pets') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Pets">

      <Form>
         
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control  type="text" {...register('nome', petValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo: </Form.Label>
           <Form.Control  type="text" {...register('tipo', petValidator.tipo)}/>
            {
              errors.tipo &&
              <small className='text-danger'>{errors.tipo.message}</small>
            }
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="raca_especie">
           <Form.Label>Raça/Espécie: </Form.Label>
           <Form.Control  type="text" {...register('raca_especie', petValidator.raca_especie)}/>
            {
              errors.raca_especie &&
              <small className='text-danger'>{errors.raca_especie.message}</small>
            }
         </Form.Group>

         <Form.Group className="mb-3" controlId="peso">
           <Form.Label>Peso: </Form.Label>
           <Form.Control  mask="999" type="text" {...register('peso', petValidator.peso)} onChange={handleChange}/>
            {
              errors.peso &&
              <small className='text-danger'>{errors.peso.message}</small>
            }
         </Form.Group>
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/pets'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
