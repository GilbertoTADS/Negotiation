export class Negociacao{

    constructor(
        private _data:Date, 
        public readonly quantidade:number,
        public readonly valor:number
        ){}
        
    get volume():number{
        return this.quantidade * this.valor;
    }
    get data():Date{
        return new Date(this._data.getTime());
    }
    public static criaDe(dataParam:string,quantidadeParam:string,valorParam:string):Negociacao{
        const exp:RegExp = /-/gi;
        const date = new Date( dataParam.replace(exp,","));
        const quantidade = parseInt(quantidadeParam);
        const valor = parseFloat(valorParam);
        return new Negociacao(date,quantidade,valor)
    }
}