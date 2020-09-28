abstract class View<T> {
    private _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor)
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string

}

// o protected serve para que, tanto a classe em si 
// quanto seus filhos possam usar os métodos e atributos. 