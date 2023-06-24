const fornecedorValidator = {
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
    cnpj: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 18,
            message: 'A quantidade de caracteres máxima é 18'
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
}

export default fornecedorValidator