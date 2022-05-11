export function domInjector(selector:string){
    const decorator = function(
        target:any,
        propertKey:string){
            let elemento:HTMLElement;
            
            const getter = function(){
                if(!elemento){
                    elemento = <HTMLElement>document.querySelector(selector);
                }
                return elemento;
            }
        Object.defineProperty(target, propertKey, {
            get:getter
        })
    }

    return decorator;
}