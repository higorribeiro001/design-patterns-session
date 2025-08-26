import { Customer } from '../interfaces/customer';
import { VehicleProtocol } from '../interfaces/vehicle-protocol';

export class IndividualCar implements VehicleProtocol {
    constructor(
        public name: string,
        private readonly customer: Customer,
    ) {}

    pickUp(): void {
        console.log(
            `${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`,
        );
    }
}
