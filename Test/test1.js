const verifica = nome => {
    try{
        validacao(nome)
        return 'Nome não encontrado' 
        } catch(erro){
            return erro
        }    
}
const validacao = nome => {
    if(!nome) throw 'Campo nome está vazio' 
    if(typeof nome !== 'string') throw 'Tipo inválido'
}

module.exports = {
    verifica,
    validacao
}