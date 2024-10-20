import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCircleMinus } from "react-icons/fa6";

const DecreaseItem = ({product}) => {

    const [cart, setCart] = useContext (CartContext);

    const removeItem = (id) => {
        setCart((currentItems) => {
            if(currentItems.find((item) => item.id === product.id)?.quantity === 1) {
                return currentItems.filter((item) => item.id !== id);
            } else {
                return currentItems.map((item) => {
                    if(item.id === product.id){
                        return{...item, quantity: item.quantity -1};
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    return (
        <>
        <button className="bg-[#144681] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0d3460] hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-out font-quickSand z-10" onClick={() => removeItem(product.id)}>
            <FaCircleMinus size = "25px" />
        </button>
        </>
    )
};

export default DecreaseItem