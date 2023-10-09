/* eslint-disable react/prop-types */

export default function DestinationCard(props) {

    const { img, rating, name, price} = props;

    return (
        <div className="w-full max-w-[420px] lg:max-w-[292px] flex lg:block gap-4">
            <div className="relative overflow-hidden max-w-[160px] lg:max-w-[292px]">
                <img src={`./img/${img}`} className="object-cover object-center rounded-[30px]"/>
                <div className="absolute flex items-center gap-2 top-0 right-0 rounded-tr-[30px] rounded-bl-[30px] py-2 px-4 md:px-6 bg-[#8080FF]">
                    <img src="./img/star.png" className="max-w-[20px] md:max-w-[30px]" />
                    <span className="text-[16px] md:text-[20px] text-white">{rating}</span>
                </div>
            </div>
            <div>
                <p className="text-[20px] mt-[20px]">{name}</p>
                <p className="text-[18px] mt-[6px] text-slate-400">{price}</p>
            </div>
        </div>
    )
}