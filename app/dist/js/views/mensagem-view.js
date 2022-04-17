import { View } from "./View.js";
export class MensagemView extends View {
    template(texto) {
        return `
            <p class="alert alert-info">
                ${texto}
            </p>
            `;
    }
}
