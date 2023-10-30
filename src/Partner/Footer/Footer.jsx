export default function Footer(){
    const render = (
        <footer className="mt-[80px] lg:mt-[100px] max-w-screen-xl mx-auto px-4 py-[100px]">
            <div className="flex justify-between flex-col lg:flex-row gap-y-8">
                <div>
                    <h1 className="text-[28px] lg:text-[36px] font-bold">Become a part <br />of our community</h1>   
                    <p className="text-[16px] text-slate-500 mt-[20px]">Grow and live together to pursue <br />happiness that we always dreaming of</p>
                    <div className="mt-[40px]">
                        <button className="inline-block mr-4">
                            <img src="./img/button-android.png" width="134px" />
                        </button>
                        <button>
                            <img src="./img/button-ios.png" width="134px" />
                        </button>
                    </div>
                </div>
                <div className="flex lg:justify-center gap-10 lg:gap-24">
                    <div className="relative">
                        <img src="./img/pic1.png" className="image-footer peer object-fill object-center max-w-[210px] rounded-[20px]" />
                        <div className="peer-[.image-footer]:peer-hover:block absolute hidden rounded-[22px] top-[60%] right-[-60px] bg-[#EDEDFA] py-3 px-4 max-w-[180px] z-10">
                            <span className="text-[13px]">Sabrina Kuku</span>
                            <p className="text-[11px] text-slate-500">My new ever and thanks to Lentera</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="./img/pic2.png" className="image-footer peer object-fill object-center max-w-[210px] rounded-[20px]" />
                        <div className="peer-[.image-footer]:peer-hover:block absolute hidden rounded-[22px] top-[60%] right-[-60px] bg-[#EDEDFA] py-3 px-4 max-w-[180px] z-10">
                            <span className="text-[13px]">Just Thin</span>
                            <p className="text-[11px] text-slate-500">Now i can make a true real passive income from houses</p>
                        </div>
                    </div>
                    <div className="relative z-0">
                        <img src="./img/pic3.png" className="image-footer peer object-fill object-center max-w-[210px] rounded-[20px]" />
                        <div className="peer-[.image-footer]:peer-hover:block absolute hidden rounded-[22px] top-[60%] right-[-60px] bg-[#EDEDFA] py-3 px-4 max-w-[180px] z-10">
                            <span className="text-[13px]">Shin Kya</span>
                            <p className="text-[11px] text-slate-500">The way I rent was so fast and can’t belive it, thanks</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )




    return render;
}