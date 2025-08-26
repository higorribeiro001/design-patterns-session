import { IndividualCustomer } from '../customer/individual-customer';
import { Customer } from '../interfaces/customer';
import { VehicleProtocol } from '../interfaces/vehicle-protocol';
import { IndividualCar } from '../vehicle/individual-car';

export class IndividualCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    }
}
