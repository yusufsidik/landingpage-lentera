export default function Footer(){
    return (
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
                <div className="flex lg:justify-center gap-10 lg:gap-24 overflow-x-auto">
                    <div>
                        <img src="./img/pic1.png" className="object-fill object-center max-w-[210px] rounded-[20px]" />
                    </div>
                    <div>
                        <img src="./img/pic2.png" className="object-fill object-center max-w-[210px] rounded-[20px]" />
                    </div>
                    <div>
                        <img src="./img/pic3.png" className="object-fill object-center max-w-[210px] rounded-[20px]" />
                    </div>
                </div>
            </div>
        </footer>
    )
}