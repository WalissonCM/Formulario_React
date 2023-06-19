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
    axios.get('/api/exames/' + query.id).then(resultado=>{
      const exame = resultado.data

    for(let atributo in exame){
      setValue(atributo, exame[atributo])
    }
  })
}
  }, [query.id])

  function salvar (dados) {
    axios.put('/api/exames/' + dados.id, dados)
    push('/exames') 
  }
  
  return (
    <Pagina titulo="Exames">

      <Form>
         
         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo de Exame: </Form.Label>
           <Form.Control type="text" {...register('tipo')}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="data">
           <Form.Label>Data: </Form.Label>
           <Form.Control type="text" {...register('data')}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="resultado">
           <Form.Label>Resultado: </Form.Label>
           <Form.Control type="text" {...register('resultado')}/>
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
