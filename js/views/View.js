class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
// o protected serve para que, tanto a classe em si 
// quanto seus filhos possam usar os métodos e atributos. 
