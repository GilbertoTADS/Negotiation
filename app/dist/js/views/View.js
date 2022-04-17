export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento;
        else
            throw Error(`Seletor nao existe no DOM. Verifique`);
        this.escapar = escapar == undefined ? false : true;
    }
    update(model) {
        const t1 = performance.now();
        let template = this.template(model);
        if (this.escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/gi, '');
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`tempo: ${(t1 - t2) / 1000} segundos`);
    }
}
