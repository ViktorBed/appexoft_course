interface Order {
    productName: string;
    quantity: number;
    pricePerUnit: number;
}

function validateOrder(order: Order): boolean {
    if (!order.productName || !order.quantity || !order.pricePerUnit) {
        return false;
    }
    if (order.quantity <= 0 || order.pricePerUnit <= 0) {
        return false;
    }
    return true;
}

const validOrder: Order = {
    productName: 'Product A',
    quantity: 5,
    pricePerUnit: 10
};

const invalidOrder: Order = {
    productName: '',
    quantity: 0,
    pricePerUnit: -5
};

console.log(validateOrder(validOrder)); // true
console.log(validateOrder(invalidOrder)); // false