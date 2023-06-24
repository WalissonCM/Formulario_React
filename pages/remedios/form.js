import Pagina from '@/components/Pagina'
import remedioValidator from '@/validators/remedioValidator'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
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
      <Row>  
      <Form.Group as={Col} md="3">
           <Form.Label>Remedio: </Form.Label>
           <select required id='nome' {...register('nome')} class="form-select" aria-label="Default select example">
            <option value="" disabled selected hidden>Remedios</option>
            <option value="Antipulgas">Antipulgas </option>
            <option value="Sabonete">Sabonete </option>
            <option value="Vermífugo">Vermífugo </option>
            <option value="Antissépticos">Antissépticos</option>
            <option value="Ração">Ração</option>
            <option value="Shampoo e Condicionador">Shampoo e Condicionador</option>
          </select>
      </Form.Group>

      <Form.Group as={Col} md="4" controlId="descricao">
           <Form.Label>Descrição do Produto: </Form.Label>
           <Form.Control type="text"  {...register('descricao', remedioValidator.descricao)}/>
            {
              errors.descricao &&
              <small className='text-danger'>{errors.descricao.message}</small>
            }
          </Form.Group>

          <Form.Group as={Col} md="1" controlId="preco">
           <Form.Label>Preço: </Form.Label>
           <Form.Control type="text" mask= "R$ 999" {...register('preco', remedioValidator.preco)} onChange={handleChange}/>
            {
              errors.preco &&
              <small className='text-danger'>{errors.preco.message}</small>
            }
          </Form.Group>
      
      <Form.Group as={Col} md="2">
           <Form.Label>Tipo de Animal: </Form.Label>
           <select required id='animal' {...register('animal')} class="form-select" aria-label="Default select example">
            <option value="" disabled selected hidden>Animal</option>
            <option value="Cães">Cães</option>
            <option value="Gatos">Gatos</option>
            <option value="Cães e Gatos">Cães e Gatos</option>
          </select>
      </Form.Group>
         
          <Form.Group as={Col} md="2" controlId="data_validade">
           <Form.Label>Data de Validade: </Form.Label>
           <Form.Control type="text" mask= "99/99/9999" {...register('data_validade', remedioValidator.data_validade)} onChange={handleChange}/>
            {
              errors.data_validade &&
              <small className='text-danger'>{errors.data_validade.message}</small>
            }
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
