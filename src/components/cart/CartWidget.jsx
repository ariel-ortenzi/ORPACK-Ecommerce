import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";

function CartWidget() {

    const [cart, setCart] = useContext (CartContext);
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
    <div className="relative p-2.5">
        <FaCartArrowDown className="cursor-pointer" size="50px"/>
        <span className="absolute top-0 right-0 bg-azulOrpack text-[12px] text-white font-bebas py-1 px-2.5 rounded-full border border-white">{quantity}</span>
    </div>
    )
}

export default CartWidget