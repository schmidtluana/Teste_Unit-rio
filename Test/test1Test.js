const should = require ('should')
const test1 = require ('../Test/test1')

describe('verificacao campo vazio', () => {
    it('Passar um nome edeve retornar pessoa não encontrada', ()=>{
        test1.verifica('Luana Schmidt').should.be.equal('Nome não encontrado')
    })    
    it('retorna a mensagem de que o campo nome está vazio', ()=>{
        test1.verifica().should.be.equal('Campo nome está vazio')
    })
    it('retorna a mensagem de que o tipo preenchido é inválido', ()=>{
        test1.verifica(123).should.be.equal('Tipo inválido')
    })
    
})

