import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes:Negociacao[] = [];

    constructor(){

    }
    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }
}