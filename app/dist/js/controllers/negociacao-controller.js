import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const t1 = performance.now()
        const negociacao = Negociacao
            .criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.NaoEhDiaUtil(negociacao.data))
            return this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
        const t2 = performance.now()
        console.log(`tempo: ${(t1 - t2)/1000}`)
    }
    NaoEhDiaUtil(data) {
        return !(data.getDay() > DiaDaSemana.DOMINGO &&
            data.getDay() < DiaDaSemana.SABADO);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(`Negociação incluída com sucesso!`);
    }
}
