import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddToCart from "./AddToCart";
import DecreaseItem from "./DecreaseItem";
import RemoveItems from "./RemoveItems";
import { FaCirclePlus } from "react-icons/fa6";

const CartItem = ({ product }) => {

    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(product.id);

    return (
        <div key={product.id} className="flex flex-col bg-white rounded-lg shadow-md hover:border-2 hover:border-azulOrpack max-w-2xl p-4 m-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                {product.name}
            </h2>
            <div className="flex">
                <div className="w-1/3 flex justify-center">
                    <img className="object-cover h-24 w-24" src={`/productsImages/${product.image}`} alt={product.name} />
                </div>
                <div className="w-1/3 flex flex-col justify-center pl-4">
                    <div className="text-lg text-gray-500">
                        <p>$ {product.price} u.</p>
                        <p>Disponibles: {product.stock} u.</p>
                    </div>
                </div>
                <div className="w-1/3 flex items-center justify-center ml-6">
                    <div>
                        <RemoveItems product={product} showDeleteButton={true} />
                    </div>
                    <div className="flex items-center space-x-4">
                        <DecreaseItem product={product} />
                        <div className="text-xl font-bold">
                            {quantityPerItem}
                        </div>
                        <AddToCart product={product} icon={<FaCirclePlus size="30px" />} />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CartItem;