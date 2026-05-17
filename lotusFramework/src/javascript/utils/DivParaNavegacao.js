import renderizarElementos from "./renderizarElementos.js";

export default class DivParaNavegacao {

    constructor() {
        this.renderizarDivParaNavegacao();
    }

    get getClassList() {
        return [...this.elemento.classList];
    }

    _chamarProximaClasseDoLayout(value) {

        if (this._classLayoutAtual) {
            this.elemento.classList.remove(this._classLayoutAtual);
        }

        this._classLayoutAtual = value;
        this.elemento.classList.add(value);
    }

    adicionarClasse(...classes) {
        this.elemento.classList.add(...classes);
    }

    removerClasse(...classes) {
        this.elemento.classList.remove(...classes);
    }

    alternarClasse(classe) {
        this.elemento.classList.toggle(classe);
    }

    contemClasse(classe) {
        return this.elemento.classList.contains(classe);
    }

    renderizarDivParaNavegacao() {
        this.elemento = renderizarElementos("div", {}, {}, true);
        this.elemento.classList.add(this._classLayoutAtual);
    }

    verificarClassesNoDOM(...classes) {
        return classes
            .filter(classe => document.querySelector(`.${classe}`))
            .join(" ");
    }
}