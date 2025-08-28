import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
// import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
// const tShirtFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
// console.log(tShirtFrontAndBack.getPrice(), tShirtFrontAndBack.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());

