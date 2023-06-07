const ProvinceOption = ({province}) => {
    return ( 
        <>
            <option key={room.name} value={JSON.stringify(province)} className="text-sm text-blue bg-white hover:bg-blue">
                {province.name}
            </option>
        </>
     );
}
 
export default ProvinceOption;