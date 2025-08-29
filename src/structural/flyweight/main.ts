import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'SP');

// se mudarmos a parte intrínseca que seroa a rua e a cidade ele cria novo objeto com o novo endereço

deliveryContext(factory, 'Eliana', '2', 'Rua A', 'BH');

console.log();
console.log(factory.getLocations());

// nós manipulamos somente a parte extrinseca que é a parte que varia no endereço
