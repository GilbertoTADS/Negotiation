export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        let texto = '[ ';
        for (let negociacao of this.negociacoes) {
            texto + '{' + negociacao.paraTexto() + '}';
        }
        texto + ' ]';
        return texto;
    }
    ehIgual(objeto) {
        return JSON.stringify(this) === JSON.stringify(objeto);
    }
}
//# sourceMappingURL=negociacoes.js.map