const exameValidator = {
    data: {
        required: '*Campo obrigatório',
        minLength: {
            value: 10,
            message: 'A quantidade de caracteres mínima é 10'
        },
        maxLength: {
            value: 10,
            message: 'A quantidade de caracteres máxima é 10'
        }
    },
    
}

export default exameValidator