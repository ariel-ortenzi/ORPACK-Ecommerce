import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';

const RemoveItems = ({ product, showDeleteButton = false }) => {
    const [cart, setCart] = useContext(CartContext);

    const removeItemCompletely = (id) => {
        setCart((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    const removeAllItems = () => {
        Swal.fire({
            title: "VACIAR CARRITO",
            text: "Usted esta por vaciar el carrito",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "CANCELAR",
            confirmButtonText: "VACIAR",
            customClass: {
                confirmButton: "bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10",
                cancelButton: "bg-[#f80808] text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "VACIADO",
                    text: "El carrito ha sido vaciado.",
                    icon: "success"
                });
                setCart([]);
            }
        });
    };

    return (
        <div className="flex flex-col space-y-4">
            {showDeleteButton ? (
                <button
                    className="bg-[#f80808] text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10 m-2" onClick={() => removeItemCompletely(product.id)}><FaTrashCan size="25px" /></button>
            ) : (
                <button
                    className="bg-[#f80808] text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10" onClick={removeAllItems}>VACIAR CARRITO</button>
            )}
        </div>
    );
};

export default RemoveItems;