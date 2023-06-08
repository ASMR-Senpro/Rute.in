import { Link } from "react-router-dom";

const DestDisplay = ({ destination, index }) => {
    const state = destination
    console.log(state)
    const id = destination.id
    return (
        <>
            <div key={index} className="border-orange-700 border-2 p-4 bg-white shadow-md rounded-md">
                <img
                    src={destination.ImagURL}
                    alt={destination.Place_Name}
                    className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-2 justify-start">
                    <h3 className="text-xl font-semibold">{destination.Place_Name}</h3>
                    <p className="text-gray-500">{destination.Location}</p>
                    <div className="justify-end mt-3 text-xs">
                        <Link
                            to={{
                                pathname: '/article',
                                state
                            }
                        }
                            className="text-orange cursor-pointer"
                        >...klik detail</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestDisplay;