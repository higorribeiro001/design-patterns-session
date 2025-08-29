import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DiscountStrategy {
    getDiscount(cart: ECommerceShoppingCart): number {
        return cart.getTotal();
    }
}
