import React, { useRef } from "react";

export default function AdminSearch({inputEl, searchTerm, getSearchTerm}) {
    return (
        <form style={{width: "960px"}}> 
            <div class="relative bg-orange-700 p-1 rounded-md">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                    ref={inputEl}
                    value={searchTerm}
                    onChange={getSearchTerm}
                    type="text" 
                    id="default-search" 
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-none rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-black" 
                    placeholder="Cari destinasi" 
                    required/>
                {/* <button type="submit" class="items-center text-white bg-orange-700 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">Cari</button> */}
            </div>
        </form>
    )
}
