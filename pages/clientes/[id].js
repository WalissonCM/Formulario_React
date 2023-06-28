import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'

const form = () => {
  
  const { push, query } = useRouter()
  const {register, handleSubmit, setValue} = useForm()
  const [animalType, setAnimalType] = useState('');

  useEffect(() => {
  
  if (query.id) {                          
    axios.get('/api/clientes/' + query.id).then(resultado=>{
      const cliente = resultado.data

    for(let atributo in cliente){
      setValue(atributo, cliente[atributo])
    }
  })
}
  }, [query.id])

  function salvar (dados) {
    axios.put('/api/clientes/' + dados.id, dados)
    push('/clientes') 
  }

  const handleAnimalTypeChange = (event) => {
    const selectedType = event.target.value;
    setAnimalType(selectedType);

  }
  
  return (
    <Pagina titulo="Clientes">

      <Form>
      <Row>
         <Form.Group as={Col} md="5" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome')}/>
         </Form.Group>
         <Form.Group as={Col} md="2" controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" {...register('cpf')}/>
          </Form.Group>
         
          <Form.Group as={Col} md="3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email')}/>
          </Form.Group>
         
          <Form.Group as={Col} md="2" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" {...register('telefone')}/>         
          </Form.Group>
         
          <Form.Group  as={Col} md="2" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" {...register('cep')}/>
          </Form.Group>

          <Form.Group as={Col} md="2" className='mt-2' controlId="address">
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
         
         <Form.Group as={Col} md="2" controlId="tipo_animal">
           <Form.Label>Tipo de Animal: </Form.Label>
           <div>
                  <select
                    required
                    id="tipo_animal"
                    {...register('tipo_animal')}
                    value={animalType}
                    onChange={handleAnimalTypeChange}
                    className="form-select"
                    aria-label="Default select example"
                    
                  >
                    <option value="" disabled selected hidden>
                      Animal
                    </option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                  </select>
                  
                    
                  {animalType === 'Cachorro' && (
                      
                      <select
                        required
                        id="raca1"
                        {...register('raca')}
                        className="form-select"
                        aria-label="Default select example"
                        
                      >
                        <option value="" disabled selected hidden>
                          Raça
                        </option>
                        <option value="Pomerânia">Pomerânia</option>
                        <option value="Bulldog Francês">Bulldog Francês</option>
                        <option value="Shih Tzu">Shih Tzu</option>
                        <option value="Rottweiler">Rottweiler</option>
                        <option value="Pug">Pug</option>
                        <option value="Golden Retriever">Golden Retriever</option>
                        <option value="Pastor Alemão">Pastor Alemão</option>
                        <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                        <option value="Border Collie">Border Collie</option>
                      </select>
                    
                  )}

                  {animalType === 'Gato' && (
                    
                      <select
                        required
                        id="raca2"
                        {...register('raca')}
                        className="form-select"
                        aria-label="Default select example"
                        
                      >
                        <option value="" disabled selected hidden>
                          Raça
                        </option>
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
                  )}
            </div>

         </Form.Group>

       
         <Form.Group as={Col} md="1" controlId="peso">
           <Form.Label>Peso: </Form.Label>
           <Form.Control type="text" {...register('peso')}/>
         </Form.Group>
         
         <div className='text-center mt-2'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/clientes'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
         </Row>
      </Form>

    </Pagina>
  )
}

export default form
