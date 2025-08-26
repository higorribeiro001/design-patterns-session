import { Vehicle } from '../../factory-method/vehicle/vehicle';
import { Customer } from '../interfaces/customer';

export interface CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}
