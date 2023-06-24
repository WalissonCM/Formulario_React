import Pagina from '@/components/Pagina'
import exameValidator from '@/validators/exameValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Col, Form, FormGroup } from 'react-bootstrap'
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
         <FormGroup as={Col} md="3" >
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
         </FormGroup>
         
         <Form.Group as={Col} md="2"  controlId="data">
           <Form.Label>Data do Exame: </Form.Label>
           <Form.Control  mask='99/99/9999' type="text" {...register('data', exameValidator.data)} onChange={handleChange}/>
            {
              errors.data &&
              <small className='text-danger'>{errors.data.message}</small>
            }
         </Form.Group>
         <div >
         <Button className='text-center mt-2' variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/exames'} className=" mt-2 ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
