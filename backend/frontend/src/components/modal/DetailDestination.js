import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    Popup,
  } from 'react-leaflet'
  import 'leaflet/dist/leaflet.css'
import { useState } from 'react'

const DetailDest = ({ dest, handleClose }) => {
    const [centerMap, setCenterMap] = useState([dest.Lat, dest.Long])
    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-6 py-6">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => handleClose(false)} >x</button>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold">{dest.Place_Name}</h3>
                        <div className="flex flex-row gap-6">
                            <label>{dest.Category}</label>
                            <label>{dest.City}</label>
                        </div>
                    </div>
                    <div>
                        <MapContainer
                            center={centerMap}
                            zoom={100}
                            style={{ width: '30vw', height: '30vh' }}
                        >
                            
                            <TileLayer
                                url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=tDMeMZZ9lS5QizYGtekk'
                                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                            >

                            </TileLayer>
                        </MapContainer>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label className="text-sm">Deskripsi : </label>
                        <label className="">{dest.Description}</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailDest;