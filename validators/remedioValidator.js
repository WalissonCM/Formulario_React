const remedioValidator = {
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
    preco: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 11,
            message: 'A quantidade de caracteres máxima é 11'
        }
    },
    data_validade: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
       
    }
}

export default remedioValidator