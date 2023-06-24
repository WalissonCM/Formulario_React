import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
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
         
         <Form.Group as={Col} md="3">
           <Form.Label>Selecione o exame: </Form.Label>
          <select required id='tipo_exame' {...register('tipo_exame')} class="form-select" aria-label="Default select example">
            <option value="" disabled selected hidden>Exames</option>
            <option value="Hemograma">Hemograma</option>
            <option value="Exame de urina">Exame de urina</option>
            <option value="Coproparasitológico">Coproparasitológico</option>
            <option value="Função hepática">Função hepática</option>
            <option value="Ultrassonografia abdominal">Ultrassonografia abdominal</option>
            <option value="Eletrocardiograma">Eletrocardiograma</option>
          </select>
         </Form.Group>

         <Form.Group as={Col} md="2" controlId="data">
           <Form.Label>Data do Exame: </Form.Label>
           <Form.Control type="text" {...register('data')}/>
         </Form.Group>
         
         <div className='text-center mt-2'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/exames'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
