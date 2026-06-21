import { Scissors } from "lucide-react";

function Bosh() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7 space-y-5">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#112233] leading-none">
          ЧИО ЧИО - Toshkentdagi{" "}
          <span className="text-[#e5004f]">yaponcha</span> sartaroshxona
          majmuasi
        </h2>
        <p className="text-base text-gray-600 max-w-lg">
          Tezlik, halollik va mukammal tozalik uyg'unligi. 1 daqiqa ichida
          o'zingizga qulay bo'lgan smart-stolni band qiling va navbatlardan
          xalos bo'ling.
        </p>
        <div>
          <a
            href="#booking-section"
            className="inline-block bg-[#e5004f] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-md hover:bg-opacity-95 transition tracking-wide text-sm md:text-base"
          >
            1 daqiqada joy band qilish
          </a>
        </div>
        <div className="pt-2">
          <span className="inline-flex flex-col md:flex-row md:items-center bg-white border border-[#dcdbd6] rounded-xl px-4 py-2.5 text-xs md:text-sm font-bold shadow-sm">
            📍 Amir Temur ko'chasi, 88-uy
            <span className="md:ml-2 font-normal text-gray-500 text-[11px] block md:inline border-t md:border-t-0 md:border-l border-gray-300 pt-1 md:pt-0 md:pl-2">
              Yagona premium jamoaviy filial
            </span>
          </span>
        </div>
      </div>

      {/* O'ng tarafdagi vizual aylana (Geometrik illustratsiya) */}
      <div className="md:col-span-5 flex flex-col items-center justify-center">
        <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center relative overflow-hidden">
          <div className="w-40 h-40 bg-[#fde8ee] rounded-full absolute"></div>
          <Scissors className="w-24 h-24 text-[#e5004f] relative z-10 opacity-90 transform -rotate-12" />
        </div>
        <p className="mt-4 text-sm font-bold text-[#112233] text-center">
          Sevimli xizmatlar — 40 000 UZS dan
          <br />
          <span className="font-normal text-xs text-gray-500">
            Vaqtni tejang, natijadan rohatlaning
          </span>
        </p>
      </div>
    </section>
  );
}

export default Bosh;
