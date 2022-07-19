import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes>{
   
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    public paraTexto(): string {
        let texto = '[ '
            for(let negociacao of this.negociacoes){
                texto + '{'+negociacao.paraTexto()+'}'
            }
        texto+' ]'
        return texto;
    }
    public ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this) === JSON.stringify(objeto);
    }
}
