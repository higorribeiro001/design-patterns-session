import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { Customer } from '../interfaces/customer';
import { VehicleProtocol } from '../interfaces/vehicle-protocol';
import { EnterpriseCar } from '../vehicle/enterprise-car';

export class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
        const customer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, customer);
    }
}
