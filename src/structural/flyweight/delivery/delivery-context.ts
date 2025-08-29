import { DeliveryFactory } from "./delivery-factory";

export const deliveryContext = function(
    factory: DeliveryFactory,
    name: string,
    number: string,
    street: string,
    city: string,
): void {
    const location = factory.makeLocation({ street, city }); // street e city são intrinsecos
    location.deliver(name, number); // name e number são extrínsecos
}
