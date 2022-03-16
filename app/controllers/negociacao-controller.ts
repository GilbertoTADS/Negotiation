import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes:Negociacoes = new Negociacoes();
    
    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona():void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.info(this.negociacoes.lista())
        this.limparFormulario();
    }
    protected limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    private criaNegociacao():Negociacao{
        const exp:RegExp = /-/gi;
        const date = new Date( this.inputData.value.replace(exp,","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(date,quantidade,valor);
    }
}