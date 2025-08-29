import { DeliveryFlyweight } from "./delivery-flyweight";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweight {
    constructor(private readonly instrinsicState: DeliveryLocationData) {}

    deliver(name: string, number: string): void {
        console.log('Entrega para %s', name);
        console.log('Em', this.instrinsicState.street, this.instrinsicState.city);
        console.log('Número:', number);
        console.log('###');
    }
}
