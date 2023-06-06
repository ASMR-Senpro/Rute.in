import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import RuteinLogo from "../../components/logo/RuteinLogo"

const About = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />

            {/* main content */}
            <main className="flex flex-col gap-40 py-24 w-full justify-center">
                <div className="flex flex-col gap-6 w-full justify-center">
                    <div className="flex font-Poppins font-semibold text-h-xl justify-center text-cyan-700">Mau wisata tanpa ribet mikirin tujuan?</div>
                    <div className="flex flex-row justify-center">
                        <RuteinLogo className={"text-h-xl font-extrabold text-orange-700"}></RuteinLogo>
                        <div className="flex font-Poppins font-semibold text-h-xl justify-center text-cyan-700">aja</div>
                    </div>    
                </div>

                {/* gambar */}
                <div className="flex flex-row justify-center ">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4" style={{width:"1120px"}}>
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* deskripsi */}
                <div className="flex flex-row justify-center ">
                    <div className="flex flex-col text-center font-Poppins font-medium text-h-md" style={{width:"1120px"}}>
                        <div>RUTE.IN adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis non sem ut eleifend. Integer condimentum ultricies nisi ac placerat. Mauris maximus eleifend massa at cursus. Morbi vulputate dapibus sapien non volutpat. Aliquam in justo sit amet nisi hendrerit venenatis. Proin sed malesuada mauris. sapien. Mauris nibh tellus, porta eget pulvinar at, feugiat a sem.</div>
                        <br></br>
                        <div>Morbi vehicula nibh mi, mattis gravida magna placerat id.</div>
                    </div>
                </div>

                {/* kenapa rutein */}
                <div className="flex flex-col gap-20 justify-center">
                    <div className="flex font-Poppins font-semibold text-h-xl justify-center text-cyan-700">Kenapa harus RUTE.IN?</div>
                    <div className="flex flex-row justify-center ">
                        <div className="grid grid-cols-4 gap-4 justify-center" style={{width:"1100px"}}>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                            </div>
                        </div>    
                    </div>
                </div>

                {/* tim kami */}
                <div className="flex flex-col gap-20 justify-center">
                    <div className="flex font-Poppins font-semibold text-h-xl justify-center text-cyan-700">Tim Kami</div>
                    <div className="flex flex-row justify-center ">
                        <div className="grid grid-cols-4 gap-4 justify-center"style={{width:"1100px"}}>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
                            </div>
                        </div>    
                    </div>
                </div>
                
                
                
            </main>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default About