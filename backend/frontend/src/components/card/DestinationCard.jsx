import { Icon } from "@iconify/react"
import React from "react"

export default function Admin({name, location, imageURL}) {
  return (
    <div class="justify-center flex flex-row space-x-2 bg-transparent h-48">
        <div class="justify-center bg-white border-4 border-orange-700 rounded-lg shadow md:flex-row md:max-w-xl" style={{ width: "196px"}}>
            <img class="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src={imageURL} alt=""></img>
        </div>
        <div class="flex flex-col items-center bg-cyan-700 border-0 rounded-lg shadow md:flex-row md:max-w-3xl" style={{ width: "1000px"}}>
            <div class="flex flex-col justify-between p-4 leading-normal"style={{ width: "1000px"}}>
                <div class="justify-end flex flex-row">
                  <Icon icon="mi:edit-alt" className="text-h-lg text-neutral-100"></Icon>
                  <Icon icon="mi:delete" className="text-h-lg text-neutral-100"></Icon>
                </div>
                  <h5 class="mb-2 text-h-lg font-bold tracking-tight text-neutral-50 dark:text-white">{name}</h5>
                  <p class="mb-3 text-b-xl font-normal text-neutral-100 dark:text-gray-400">{location}</p>
                <a href="#" class="text-right text-b-sm mb-3 font-normal text-neutral-50 dark:text-gray-400">...klik untuk detail</a>
            </div>
        </div>
    </div>
  )
}
