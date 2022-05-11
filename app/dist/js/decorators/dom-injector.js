export function domInjector(selector) {
    const decorator = function (target, propertKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
            }
            return elemento;
        };
        Object.defineProperty(target, propertKey, {
            get: getter
        });
    };
    return decorator;
}
