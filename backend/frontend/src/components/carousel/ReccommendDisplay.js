import { Link } from "react-router-dom";

const ReccomendDisplay = ({ item }) => {
    const wordLimit = 16
    return (
        <>
            <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-orange-700 text-white p-4"
            >
                <div className="text-center">
                    <Link to="" className="text-md" >
                        {item.place_name?.length > wordLimit ?
                            <p>{item.place_name.substr(0, wordLimit)}...</p>
                            :
                            <p>{item.place_name}</p>
                        }
                    </Link>
                    <div className="text-b-sm">
                        {item.category?.length > wordLimit ?
                            <p>{item.category.substr(0, wordLimit)}...</p>
                            :
                            <p>{item.category}</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReccomendDisplay;