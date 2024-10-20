import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget.jsx";
import logo from "../../assets/logotype/logoOrpack.png";
import SearchBar from "../serchBar/SearchBar.jsx";

export default function NavBar() {
    return (
        <header className="sticky top-0 bg-gray-500 border border-b-4 border-gray-500 border-b-blue-900 z-50">
            <nav className="flex flex-grow-1 p-4">
                <Link to={"/"}>
                    <div className="content-center">
                        <img className="size-40" src={logo} alt="Logo orpack" />
                    </div>
                </Link>
                <div className="flex grow flex-col justify-center items-center">
                    <SearchBar/>
                    <div className="flex items-center justify-around">
                        <ul className="flex justify-around items-center space-x-10 font-bebas text-2xl">
                            <Link to={"/"} className="hover:text-azulOrpack">TODOS</Link>
                            <Link to={"/category/cinta"} className="hover:text-azulOrpack">CINTAS</Link>
                            <Link to={"/category/filmadherente"} className="hover:text-azulOrpack">FILM ADHERENTE</Link>
                            <Link to={"/category/filmalimentos"} className="hover:text-azulOrpack">FILM ALIMENTOS</Link>
                            <Link to={"/category/filmstreetch"} className="hover:text-azulOrpack">FILM STREETCH</Link>
                            <Link to={"/category/paletizadoras"} className="hover:text-azulOrpack">PALETIZADORAS</Link>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end items-center mr-4">
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
