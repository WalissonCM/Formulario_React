const fornecedorValidator = {
    nome: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 20'
        }
    },
    cnpj: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 18,
            message: 'A quantidade de caracteres máxima é 18'
        }
    },
    email: {
        required: 'O campo é obrigatório',
    },
    telefone: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 15,
            message: 'A quantidade de caracteres máxima é 15'
        }
    },
    estado: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 4,
            message: 'A quantidade de caracteres mínima é 4'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    cep: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    
   
}

export default fornecedorValidator