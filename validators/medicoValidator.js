const medicoValidator = {
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
    funcao: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    cpf: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 15,
            message: 'A quantidade de caracteres máxima é 15'
        }
    },
    salario: {
        required: '*Campo obrigatório',
        maxLength: {
            value: 9,
            message: 'A quantidade de caracteres máxima é 9'
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
    }

}

export default medicoValidator