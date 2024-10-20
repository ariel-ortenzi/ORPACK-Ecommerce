import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <PulseLoader
                color="#144681"
                size={20}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Loading;
