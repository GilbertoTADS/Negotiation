import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes:Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");
    
    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    public adiciona():void {
        const negociacao = Negociacao
            .criaDe(this.inputData.value,this.inputQuantidade.value,this.inputValor.value);

        if(this.NaoEhDiaUtil(negociacao.data)) return this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
        
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    private NaoEhDiaUtil(data:Date):boolean{
        return !(data.getDay() > DiaDaSemana.DOMINGO && 
                data.getDay() < DiaDaSemana.SABADO);
    }
    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    private atualizaView(){
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(`Negociação incluída com sucesso!`)
    }
}