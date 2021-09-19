class NotSuportedType extends Error {
    constructor (contentType) {
        super(`O tipo ${contentType} não é aceito`)
        this.name = 'NotSuportedType'
        this.idErro = 3
    }
}

module.exports = NotSuportedType 