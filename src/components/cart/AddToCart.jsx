import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCirclePlus } from "react-icons/fa6";
import Swal from 'sweetalert2';

const AddToCart = ({product, icon}) => {

    const [cart, setCart] = useContext (CartContext);

    const addToCart = () => {
        const isItemsFound = cart.find((item) => item.id === product.id);
        const currentQuantity = isItemsFound ? isItemsFound.quantity : 0;

        if (currentQuantity + 1 > product.stock) {
            Swal.fire({
                icon: "error",
                title: "SIN STOCK",
                html: `No hay más stock disponible de: <br><strong>${product.name}</strong>`,
                confirmButtonText: `ENTENDIDO`,
                customClass: {
                    confirmButton: 'bg-[#144681] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0d3460] hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10'
                }
            });
            return;
        }

        setCart((currentItems) => {
            if(isItemsFound){
                return currentItems.map((item) =>{
                    if(item.id === product.id){
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currentItems, {id: product.id, stock: product.stock, name: product.name, price: product.price, image: product.routeImage, quantity: 1}];
            }
        })
    };

    return (
        <button className="bg-[#144681] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0d3460] hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10" onClick = {addToCart}>{icon ? <FaCirclePlus size = "25px" /> : 'AGREGAR AL CARRITO'}</button>
    );
};

export default AddToCart;