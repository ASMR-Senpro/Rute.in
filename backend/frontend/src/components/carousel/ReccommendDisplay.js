import { Link } from "react-router-dom";
import DetailDest from "../modal/DetailDestination";
import { useState } from "react";

const ReccomendDisplay = ({ item }) => {
    const wordLimit = 16
    const [detail, setDetail] = useState(false)
    const handleDetail = (state) => {
        setDetail(state)
    }


    return (
        <>
            {detail && <DetailDest dest={item} handleClose={handleDetail} />}
            <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-orange-700 text-white p-4"
            >
                <div className="text-center">
                    <Link
                        className="text-md cursor-pointer"
                        to={{
                            pathname:'/package',
                            search:(item.place_name)
                        }}
                    >
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