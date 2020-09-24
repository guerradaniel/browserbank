class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        throw new Error('Você deve implementar o método template');
    }
}
// o protected serve para que, tanto a classe em si 
// quanto seus filhos possam usar os métodos e atributos. 
