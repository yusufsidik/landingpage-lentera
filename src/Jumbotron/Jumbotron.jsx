export default function Jumbotron() {
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <div className="w-full lg:w-5/12 mt-[65px] md:mt-[50px]">
          <h1 className="font-semibold text-[40px] lg:text-[48px]">
            We have thousand <br /> of your dream house
          </h1>
          <p className="text-slate-400 text-[16px] lg:text-[18px] mt-[16px]">
            A light that will guide you to find what you have <br /> been
            looking for long time ago
          </p>
          <div className="flex justify-between max-w-[350px] mt-[40px]">
            <div>
              <h2 className="font-semibold text-[28px] lg:text-[32px]">
                18<span className="text-[#8080FF]">K</span>
              </h2>
              <span className="text-[18px] text-slate-400">apartment</span>
            </div>
            <div>
              <h2 className="font-semibold text-[28px] lg:text-[32px]">
                52<span className="text-[#8080FF]">K</span>
              </h2>
              <span className="text-[18px] text-slate-400">success</span>
            </div>
            <div>
              <h2 className="font-semibold text-[28px] lg:text-[32px]">
                14<span className="text-[#8080FF]">M</span>
              </h2>
              <span className="text-[18px] text-slate-400">transactions</span>
            </div>
          </div>

          <div className="mt-[45px] flex flex-col">
            <span className="text-[16px] lg:text-[18px] text-slate-400">
              Location
            </span>
            <span className="py-2 px-4 mt-4 bg-slate-200 text-[16px] lg:text-[18px] max-w-[320px]">
              Sawangan Golf, Padalarang
            </span>
          </div>
          <button className="text-[16px] hover:bg-orange-500 lg:text-[18px] mt-[25px] text-white bg-orange-400 border border-slate-400 py-2 px-6">
            Explore Now
          </button>
        </div>
        <div className="relative">
          <img
            src="./img/house.png"
            className="hidden md:block md:max-w-[420px] lg:max-w-[700px] self-end relative z-10 rounded-b-3xl"
          />
          <div className="absolute bottom-0 left-0 right-0 top-[220px] bg-[#8080FF] z-0 rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
