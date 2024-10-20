import { useState } from 'react';

const CheckOut = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrorMessage('')

        if (email !== confirmEmail) {
            setErrorMessage('Los correos electrónicos no coinciden.');
            return;
        }
        alert('AGREGAR SWEET ALERT')
        setFullName('')
        setEmail('')
        setConfirmEmail('')
        setPhone('')
        setAddress('')
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto mt-10 font-quickSand max-w-sm">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirmar Email</label>
                    <input
                        type="email"
                        id="confirmEmail"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-azulOrpack"
                    />
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-green-500 text-2xl text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10 w-full">COMPRAR</button>
                </div>
            </form>
            {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
        </div>
    );
};

export default CheckOut