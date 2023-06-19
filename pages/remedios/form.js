import Pagina from '@/components/Pagina'
import remedioValidator from '@/validators/remedioValidator'

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
    axios.post('/api/remedios', dados)
    push('/remedios') 
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Remedios">

      <Form>
         
      <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', remedioValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="preco">
           <Form.Label>Preço: </Form.Label>
           <Form.Control type="text" mask= "R$ 9999" {...register('preco', remedioValidator.preco)} onChange={handleChange}/>
            {
              errors.preco &&
              <small className='text-danger'>{errors.preco.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="data_validade">
           <Form.Label>Data de Validade: </Form.Label>
           <Form.Control type="text" mask= "99/99/9999" {...register('data_validade', remedioValidator.data_validade)} onChange={handleChange}/>
            {
              errors.data_validade &&
              <small className='text-danger'>{errors.data_validade.message}</small>
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
