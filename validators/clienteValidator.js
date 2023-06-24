const clienteValidator = {
    nome: {
        required: '*Campo obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    cpf: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 15,
            message: 'A quantidade de caracteres máxima é 15'
        }
    },
    email: {
        required: '*Campo obrigatório',
    },
    telefone: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 15,
            message: 'A quantidade de caracteres máxima é 15'
        }
    },
    cep: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    peso: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 5,
            message: 'A quantidade de caracteres máxima é 5'
        }
    },
    
}

export default clienteValidator