import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import AddToCart from "../cart/AddToCart.jsx";
import DecreaseItem from "../cart/DecreaseItem.jsx";
import RemoveItems from "../cart/RemoveItems.jsx";
import { FaCirclePlus } from "react-icons/fa6";

const ItemDetail = ({ product }) => {

    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(product.id)

    return (
        <div className="relative flex justify-center items-center font-quickSand">
            <div className="absolute left-32 max-w-lg max-h-full pt-20 pr-30">
                <div className="w-full p-4 text-center items-center bg-white flex">
                    <div className="pr-6">
                        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                        <img className="min-w-full min-h-48 object-contain pt-2" src={`/productsImages/${product.routeImage}`} alt="" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-lg text-justify mt-2 max-w-full">{product.description}</h4>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-white">
                    <h3 className="text-xl text-gray-500 mt-1 pb-6">{`$ ${product.price} u.`}</h3>
                    <div className="flex justify-center items-center space-x-4 m-4">
                        <Link to={"/"}>
                            <button className="bg-azulOrpack text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#123a6d] transition-all duration-300 transform hover:scale-105 shadow-lg"><IoHome size="25px" /></button>
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
            </div>
        </div>
    )
}

export default ItemDetail