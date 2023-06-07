const ProvinceOption = ({prov}) => {
    return ( 
        <>
            <option key={prov.id} value={JSON.stringify(prov)} className="text-sm text-blue bg-white text-neutral-700  hover:bg-cyan-500 hover:text-white">
                {prov.name}
            </option>
        </>
     );
}
 
export default ProvinceOption;