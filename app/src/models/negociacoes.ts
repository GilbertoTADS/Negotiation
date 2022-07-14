import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes extends Imprimivel{
   
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
}
