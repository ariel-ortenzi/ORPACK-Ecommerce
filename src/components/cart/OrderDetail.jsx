import React from 'react';

const OrderDetail = ({ orderDetails }) => {
    return (
        <div className='max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg font-quickSand mt-10 mb-10' style={{ backgroundColor: '#F7F9FC' }}>
            <h2 className='text-center font-bebas text-3xl font-semibold text-azulOrpack mb-6'>
                Detalles de la Orden
            </h2>
            <p className='text-center font-quickSand text-lg text-gray-700 mb-4'>
                <strong>Nombre:</strong> {orderDetails.fullName}
            </p>
            <h3 className='text-center font-bebas text-2xl font-semibold text-azulOrpack mb-4'>
                <strong>Productos Comprados</strong>
            </h3>
            <ul className='space-y-4'>
                {orderDetails.products.map((product) => (
                    <li key={product.id} className='flex justify-between items-center border-b border-gray-300 p-4 bg-white rounded-md shadow-sm hover:bg-gray-200 transition duration-200'>
                        <div className='text-lg font-medium text-azulOrpack'>{product.name}</div>
                        <div className='flex flex-col items-end text-gray-600'>
                            <span>Cantidad: {product.quantity}</span>
                            <span>Precio: ${product.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='mt-6 border-t border-gray-300 pt-4'>
                <h4 className='text-lg font-semibold text-azulOrpack'>
                    <strong>Total de productos:</strong> {orderDetails.totalQuantity}
                </h4>
                <h4 className='text-lg font-semibold text-azulOrpack'>
                    <strong>Total a Pagar:</strong> ${orderDetails.totalPrice}
                </h4>
            </div>
            <p className='text-center font-quickSand text-lg text-gray-700 mt-4'>
                <strong>Fecha de compra:</strong> {orderDetails.date}
            </p>
        </div>
    );
};

export default OrderDetail;
