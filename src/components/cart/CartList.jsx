import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import RemoveItems from './RemoveItems';
import FormCheckOut from './FormCheckOut';
import OrderDetail from './OrderDetail';

function CartList() {
    const [cart, setCart] = useContext(CartContext);
    const [orderDetails, setOrderDetails] = useState(null);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

    const handleOrderCreation = (order) => {
        setOrderDetails(order);
    };

    return (
        <>
            {orderDetails ? ( 
                <OrderDetail orderDetails={orderDetails}/>
            ) : (
                <>
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="flex flex-wrap justify-start gap-4 p-2 w-full lg:w-2/3 ">
                            {cart.length === 0 ? (
                                <div className="text-xl font-semibold w-full flex justify-center items-center mt-32">
                                    <img src="./empty-cart.png" alt="empty-cart" />
                                </div>
                            ) : (
                                cart.map((product) => (
                                    <div key={product.id} className="w-full">
                                        <CartItem product={product} />
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="lg:w-1/3 w-full p-4 bg-gray-100 rounded-lg shadow-md h-fit lg:sticky lg:top-56 mr-6 mt-3">
                            <div className='flex justify-between'>
                                <div>
                                    <h3 className="text-lg font-semibold">Resumen del Pedido</h3>
                                    <p className="text-gray-700">Productos en carrito: {quantity}</p>
                                    <h3 className="text-xl font-bold mt-4">TOTAL: ${totalPrice}</h3>
                                </div>
                                <div className='flex justify-center items-center m-2'>
                                    <RemoveItems />
                                </div>
                            </div>
                            <FormCheckOut totalPrice={totalPrice} quantity={quantity} onOrderCreated={handleOrderCreation} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default CartList;