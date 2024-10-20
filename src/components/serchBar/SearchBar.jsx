import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";

function SearchBar() {

    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");

        if (inputValue) {
            navigate(`/search=/${inputValue}`);
        } else {
            navigate(`/`)
        }
    }

    return (
        <div className="w-[65%]">
            <form className="flex grow justify-center items-center" onSubmit={handleSubmit}>
                <input className="w-[100%] h-12 text-center rounded-lg border-2 font-quickSand text-lg font-semibold" type="text" placeholder="¿Qué estas buscando?" value={inputValue} onChange={handleChange} />
                <button type="submit" onSubmit={handleSubmit}><FcSearch className="m-2" size="50px" /></button>
            </form>
        </div>
    )
}

export default SearchBar