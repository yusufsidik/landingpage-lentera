import DestinationCard from "../Component/DestinationCard";

export default function Destination() {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="text-center lg:mb-0">
        <h1 className="text-[28px] lg:text-[36px] font-semibold">Most People Go</h1>
        <p className="text-slate-500 text-[16px] lg:text-[18px] mt-[10px] lg:mt-[16px]">
          From nature to heart and becomes <br />
          all what we need to have
        </p>
      </div>
      <div className="flex justify-center mt-10 lg:mt-8 gap-8 flex-wrap">
        <DestinationCard rating="4,5" img="destination1.jpg" name="Lembang, Bandung" price="Start from $850k"></DestinationCard>
        <DestinationCard rating="4,9" img="destination2.jpg" name="Yusuf Center, Samarinda" price="Start from $1.050k"></DestinationCard>
        <DestinationCard rating="4,5" img="destination3.jpg" name="Ahya, France" price="Start from $550k"></DestinationCard>
        <DestinationCard rating="4,6" img="destination4.jpg" name="Koko, Jamaica" price="Start from $650k"></DestinationCard>
      </div>
    </section>
  );
}
