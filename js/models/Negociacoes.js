class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
// É uma boa prática nos métodos especificar de que tipo ele é 
// para garantir que ele sempre retornará deste tipo. Quando não 
// for de nenhum tipo, retornamos void.  
// O concat é usado para evitar que o this._negociacoes seja mudado 
// no decorrer do código. Ela cria uma nova instância ao invés  
// de usá-la como referência no atributo.
