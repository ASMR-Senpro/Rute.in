import { Icon } from "@iconify/react"
import React from "react"

export default function Admin() {
  return (
    <div class="justify-center flex flex-row space-x-2 bg-transparent h-48">
        <div class="justify-center bg-white border-4 border-orange-700 rounded-lg shadow md:flex-row md:max-w-xl ">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""></img>
        </div>
        <div class="justify-center flex flex-col items-center bg-cyan-700 border-0 rounded-lg shadow md:flex-row md:max-w-3xl">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <div class="justify-end flex flex-row">
                  <Icon icon="mi:edit-alt" className="text-h-lg text-neutral-100"></Icon>
                  <Icon icon="mi:delete" className="text-h-lg text-neutral-100"></Icon>
                </div>
                <h5 class="mb-2 text-h-lg font-bold tracking-tight text-neutral-50 dark:text-white">Nama Lokasi</h5>
                <p class="mb-3 text-b-xl font-normal text-neutral-100 dark:text-gray-400">ini alamat lokasi Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="text-right text-b-sm mb-3 font-normal text-neutral-50 dark:text-gray-400">...klik untuk detail</a>
            </div>
        </div>
    </div>
  )
}
