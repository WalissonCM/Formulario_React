const petValidator = {
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
    raça_especie: {
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
    peso: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 3,
            message: 'A quantidade de caracteres máxima é 3'
        }
    },
    
}

export default petValidator