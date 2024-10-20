import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import AddToCart from "../cart/AddToCart.jsx";
import DecreaseItem from "../cart/DecreaseItem.jsx";
import { FaCirclePlus } from "react-icons/fa6";
import RemoveItems from "../cart/RemoveItems.jsx";


const Item = ({ product }) => {

    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(product.id)

    return (
        <>
            <div key={product.id} className="hover:border-solid hover:border-2 hover:border-azulOrpack max-w-sm max-h-full bg-white rounded-lg shadow-md overflow-hidden flex p-4 justify-center items-center min-w-sm min-h-full" >
                <div className="p-4 text-center items-center">
                    <Link to={`/detail/${product.id}`}>
                        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                        <div>
                            <img className="w-full h-48 object-cover pt-2" src={`/productsImages/${product.routeImage}`} alt={product.name} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg text-gray-500 m-4">{`$ ${product.price} u.`}</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg text-gray-500 m-4">{`Disponibles: ${product.stock} u.`}</h3>
                        </div>
                    </Link>
                    <div className="flex justify-center items-center">
                        {
                            quantityPerItem === 0 ? (
                                <AddToCart product={product} />
                            ) : (
                                <>
                                    <div>
                                        <RemoveItems product={product} showDeleteButton={true} />
                                    </div>
                                    <div className="flex text-center items-center">
                                        <DecreaseItem product={product} />
                                        <div className="m-6 font-bebas text-xl font-blod">
                                            {quantityPerItem}
                                        </div>
                                        <AddToCart product={product} icon={<FaCirclePlus size="40px" />} />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;