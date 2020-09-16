
class NegociacaoController {
    private _inputData
    private _inputQuantidade
    private _inputValor

    constructor() {

        let $ = document.querySelector.bind(document)

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
    }

    adiciona(event: any) {
        event.preventDefault();

        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value);
        console.log(negociacao.quantidade + 20)
    }
}