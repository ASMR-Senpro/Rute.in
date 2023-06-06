import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import MapImg from "../../assets/images/map.png"
import ReviewCard from "../../components/card/ReviewCard"

const Article = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />

            {/* main content */}
            <div className="bg-gradient-to-tr from-cyan-100 via-cyan-500 to-cyan-700 h-[430px]">

            </div>

            <div className="flex flex-col gap-4 justify-center items-center my-[20px] mx-12">
                {/* Judul dan rating tempat */}
                <div className="flex flex-row justify-between w-full">
                    <div id="name" className="flex font-Poppins font-medium text-[64px]">Malioboro</div>
                    <div id="rate"class="flex items-center justify-end w-[270px]">
                        <svg aria-hidden="true" class="w-5 h-5 text-base" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-base" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-base" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-base" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-base dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                    </div>
                </div>
                {/* Deskripsi */}
                <div className="flex flex-col gap-4">
                    <div className="flex border-b-[3px] border-orange-700 font-Poppins font-medium text-h-md">Deskripsi</div>
                    <div className="flex font-Poppins text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </div>
                </div>

                {/* Fasilitas */}
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex border-b-[3px] border-orange-700 font-Poppins font-medium text-h-md">Fasilitas</div>
                    <ul class="list-disc list-inside">
                        <li>Toilet</li>
                        <li>Mushola</li>
                        <li>Mall</li>
                        <li>Food Court</li>
                    </ul>
                </div>

                {/* Lokasi */}
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex border-b-[3px] border-orange-700 font-Poppins font-medium text-h-md">Lokasi</div>
                    <div className="flex flex-row gap-4">
                        <img src={MapImg}></img>
                        <div className="flex font-Poppins text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </div>
                    </div>
                </div>

                {/* Review */}
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex border-b-[3px] border-orange-700 font-Poppins font-medium text-h-md">Ulasan</div>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                    <ReviewCard></ReviewCard>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default Article