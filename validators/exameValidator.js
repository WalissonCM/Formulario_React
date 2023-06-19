const exameValidator = {
    tipo: {
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
    
    data: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    resultado: {
        required: 'O campo é obrigatório',
        minLength: {
            value: 5,
            message: 'A quantidade de caracteres mínima é 5'
        },
        maxLength: {
            value: 50,
            message: 'A quantidade de caracteres máxima é 50'
        }
    },
    
}

export default exameValidator