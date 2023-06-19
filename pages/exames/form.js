import Pagina from '@/components/Pagina'
import exameValidator from '@/validators/exameValidator'
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
    axios.post('/api/exames', dados)
    push('/exames') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Exames">

      <Form>
         
         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo de Exame: </Form.Label>
           <Form.Control  type="text" {...register('tipo', exameValidator.tipo)}/>
            {
              errors.tipo &&
              <small className='text-danger'>{errors.tipo.message}</small>
            }
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="data">
           <Form.Label>Data: </Form.Label>
           <Form.Control  mask= "99/99/9999" type="text" {...register('data', exameValidator.data)} onChange={handleChange}/>
            {
              errors.data &&
              <small className='text-danger'>{errors.data.message}</small>
            }
         </Form.Group>
         <Form.Group className="mb-3" controlId="resultado">
           <Form.Label>Resultado: </Form.Label>
           <Form.Control  type="text" {...register('resultado', exameValidator.resultado)}/>
            {
              errors.resultado &&
              <small className='text-danger'>{errors.resultado.message}</small>
            }
         </Form.Group>
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/exames'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
