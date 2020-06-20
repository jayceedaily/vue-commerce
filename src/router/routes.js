import Product from '../views/product/Index';
import Checkout from '../views/checkout/Index';
import Order from '../views/order/Index';

export const routes = [

    {
        path: '/',
        name: 'Order',
        component: Order,
        meta: {
            title: 'Order'
        }
    },


    {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: {
            title: 'Product'
        }
    },
    
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
        meta: {
            title: 'Checkout'
        }
    },

];
