/* eslint-disable react/prop-types */

// img, rating, name, place

export default function DestinationCard(props) {

    const { img, rating, name, price} = props;

    return (
        <div className="max-w-[292px]">
            <div className="relative overflow-hidden">
                <img src={`./img/${img}`} className="max-w-[292px] object-cover object-center rounded-[30px]"/>
                <div className="absolute flex items-center gap-2 top-0 right-0 rounded-tr-[30px] rounded-bl-[30px] py-2 px-6 bg-[#8080FF]">
                    <img src="./img/star.png" className="max-w-[30px]" />
                    <span className="text-[20px] text-white">{rating}</span>
                </div>
            </div>
            <p className="text-[20px] mt-[20px]">{name}</p>
            <p className="text-[18px] mt-[6px] text-slate-400">{price}</p>
        </div>
    )
}