const funcionarioValidator = {
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
    funcao: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 15,
            message: 'A quantidade de caracteres máxima é 15'
        }
    },
    salario: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 12,
            message: 'A quantidade de caracteres máxima é 12'
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
    cep: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    logradouro: {
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
    complemento: {
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
    numero: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 3,
            message: 'A quantidade de caracteres máxima é 3'
        }
    },
    bairro: {
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

}

export default funcionarioValidator