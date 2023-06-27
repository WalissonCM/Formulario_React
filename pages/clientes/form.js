import Pagina from '@/components/Pagina'
import clienteValidator from '@/validators/clienteValidator'
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
    axios.post('/api/clientes', dados)
    push('/clientes') 
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
    <Pagina titulo="Clientes">

      <Form onSubmit={handleSubmit(onSubmit)}>
         <Row>
         <Form.Group as={Col} md="5" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control  type="text" {...register('nome', clienteValidator.nome)}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
         </Form.Group>

         <Form.Group as={Col} md="2"  controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" mask= "999.999.999-99" {...register('cpf', clienteValidator.cpf)} onChange={handleChange}/>
            {
              errors.cpf &&
              <small className='text-danger'>{errors.cpf.message}</small>
            }
          </Form.Group>
      
          <Form.Group as={Col} md="3"  controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email', clienteValidator.email)}/>
            {
              errors.email &&
              <small className='text-danger'>{errors.email.message}</small>
            }
          </Form.Group>
         
          <Form.Group as={Col} md="2"  controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" mask= "(99) 99999-9999" {...register('telefone', clienteValidator.telefone)} onChange={handleChange}/>
            {
              errors.telefone &&
              <small className='text-danger'>{errors.telefone.message}</small>
            }
          </Form.Group>
         
          <Form.Group as={Col} md="2" className='mt-2'  controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text"  {...register('cep')} onBlur={checkCEP}/>
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
         
         <Form.Group as={Col} md="2" className='mt-2'>
           <Form.Label>Tipo de Animal: </Form.Label>  
          <select required id='tipo_animal' {...register('tipo_animal')} class="form-select" aria-label="Default select example">
            <option value="" disabled selected hidden>Animal</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            
          </select>
         </Form.Group>
        
         <Form.Group as={Col} md="2" className='mt-2'>
           <Form.Label>Raça: </Form.Label>          
          
          <select required id='raca1' {...register('raca')} class="form-select" aria-label="Default select example">
            <option value="" disabled selected hidden>Raça</option>
            <option value="Pomerânia">Pomerânia</option>
            <option value="Bulldog Francês">Bulldog Francês</option>
            <option value=" Shih Tzu"> Shih Tzu</option>
            <option value="Rottweiler">Rottweiler</option>
            <option value="Pug">Pug</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Pastor Alemão">Pastor Alemão</option>
            <option value="Yorkshire Terrier">Yorkshire Terrier</option>
            <option value="Border Collie">Border Collie</option>
          </select>

          <select required id='raca2' {...register('raca')} class="form-select" aria-label="Default select example">
            <option value="" disabled selected hidden>Raça</option>
            <option value="Persa e Himalaia">Persa e Himalaia</option>
            <option value="Siamês">Siamês</option>
            <option value="Maine Coon">Maine Coon</option>
            <option value="Angorá">Angorá</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Ragdoll">Ragdoll</option>
            <option value="Ashera">Ashera</option>
            <option value="American Shorthair">American Shorthair</option>
            <option value="Exótico">Exótico</option>
          </select>
          
 {/* <select id="1">
<option value="1">....</option>
<option value="2">....</option>
<option value="3">....</option> 
</select>

<select id="2" style="display:none;">
<option value="1">....</option>
<option value="2">....</option>
<option value="3">....</option> 
</select>
Your Jquery Here

$("#1").change(function(){
    if($(this).val() == 3){
      $("#2").show();
    }else{
      $("#2").hide();
    }

});  */}
          
         </Form.Group>

         <Form.Group  as={Col} md="1" className='mt-2' controlId="peso">
           <Form.Label>Peso: </Form.Label>
           <Form.Control  mask="99 kg" type="text" {...register('peso', clienteValidator.peso)} onChange={handleChange}/>
            {
              errors.peso &&
              <small className='text-danger'>{errors.peso.message}</small>
            }
         </Form.Group>
         <div>
         <Button className='text-center mt-2' onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/clientes'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
       </Row>
      </Form>
     
    </Pagina>
  )
}

export default form
