import { View } from "./View.js";

export class MensagemView extends View<String>{

    protected template(texto: String): string {
        return `
            <p class="alert alert-info">
                ${texto}
            </p>
            `;
    }

}