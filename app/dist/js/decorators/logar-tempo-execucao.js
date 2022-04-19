export function logarTempoExecucao() {
    return function (target, propertyKey, PropertyDescriptor) {
        const metodoOriginal = PropertyDescriptor.value;
        PropertyDescriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.info(`${propertyKey}, tempo de execução: ${t2 - t1 / 1000}`);
            retorno;
        };
        return PropertyDescriptor;
    };
}
