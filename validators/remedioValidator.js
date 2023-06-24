const remedioValidator = {
    descricao: {
        required: '*Campo obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 20,
            message: 'A quantidade de caracteres máxima é 10'
        }
    
    },
    preco: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 6,
            message: 'A quantidade de caracteres máxima é 6'
        }
    
    },
    data_validade: {
        required: '*Campo obrigatório',
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