import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';

const FormCheckOut = ({ totalPrice, quantity, onOrderCreated }) => {
    const [cart, setCart] = useContext(CartContext);
    const db = getFirestore();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        confirmEmail: "",
        phone: "",
        address: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.fullName) errors.fullName = "El nombre es requerido";
        if (!formData.email) errors.email = "El email es requerido";
        if (formData.email !== formData.confirmEmail) errors.confirmEmail = "Los correos no coinciden";
        if (!formData.phone) errors.phone = "El teléfono es requerido";
        if (!formData.address) errors.address = "La dirección es requerida";
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            Swal.fire({
                title: '¿Confirmar compra?',
                text: `El total a pagar es $${totalPrice}.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, confirmar',
                cancelButtonText: 'No, cancelar',
                    customClass: {
                        confirmButton: 'bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10',
                        cancelButton: 'bg-[#f80808] text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10',
                },
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const orderInfo = {
                        fullName: formData.fullName,
                        email: formData.email,
                        products: cart.map(product => ({
                            id: product.id,
                            name: product.name,
                            quantity: product.quantity,
                            price: product.price,
                        })),
                        totalQuantity: quantity,
                        totalPrice: totalPrice,
                        date: new Date().toLocaleString(),
                        state: 'generated'
                    };

                    try {
                        const docRef = await addDoc(collection(db, "orders"), orderInfo);
                        onOrderCreated(orderInfo);

                        Swal.fire({
                            title: '¡Compra realizada!',
                            text: 'Gracias por tu compra.',
                            icon: 'success',
                            confirmButtonText: 'Ir al detalle',
                            customClass: {
                                confirmButton: 'bg-azulOrpack font-quickSand text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-950 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out z-10',
                                title: 'font-quickSand',
                                text: 'font-quickSand',
                            },
                        });
                    } catch (error) {
                        console.error("Error al crear la orden: ", error);
                    }

                    setCart([]);
                    setFormData({
                        fullName: "",
                        email: "",
                        confirmEmail: "",
                        phone: "",
                        address: "",
                    });
                } else {
                    Swal.fire({
                        title: 'Compra cancelada',
                        text: 'Lamentamos que no hayas finalizado la compra.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                        customClass: {
                            confirmButton: 'bg-azulOrpack text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-950 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10',
                            title: 'font-quickSand',
                            text: 'font-quickSand',
                        },
                    });
                }
            });
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto mt-10 font-quickSand max-w-sm">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                    {formErrors.fullName && <span className="text-red-500">{formErrors.fullName}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                    {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
                        Confirmar Email
                    </label>
                    <input
                        type="email"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                    {formErrors.confirmEmail && <span className="text-red-500">{formErrors.confirmEmail}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                    {formErrors.phone && <span className="text-red-500">{formErrors.phone}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Dirección
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                    {formErrors.address && <span className="text-red-500">{formErrors.address}</span>}
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-green-500 text-2xl text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10 w-full"
                    >
                        COMPRAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCheckOut;
