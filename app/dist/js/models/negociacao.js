export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    static criaDe(dataParam, quantidadeParam, valorParam) {
        const exp = /-/gi;
        const date = new Date(dataParam.replace(exp, ","));
        const quantidade = parseInt(quantidadeParam);
        const valor = parseFloat(valorParam);
        return new Negociacao(date, quantidade, valor);
    }
}
