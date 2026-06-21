function Price() {
  const priceList = {
    kesim: [
      {
        id: "tekis_40",
        name: "Tekislash va oddiy shakl berish",
        price: "40 000 UZS",
      },
      {
        id: "erkak_60",
        name: "Asosiy yaponcha kesim (Erkaklar)",
        price: "60 000 UZS",
      },
      {
        id: "ayol_80",
        name: "Ayollar premium soch kesimi",
        price: "80 000 UZS",
      },
    ],
    yuvish: [
      {
        id: "yuv_erkak_20",
        name: "Bosh yuvish va parvarish (Erkaklar)",
        price: "20 000 UZS",
      },
      {
        id: "yuv_ayol_40",
        name: "Ayollar uchun premium parvarish",
        price: "40 000 UZS",
      },
    ],
    soqol: [
      {
        id: "soqol_30",
        name: "Soqol konturi va shakl berish",
        price: "30 000 UZS",
      },
    ],
    kombo: [
      {
        id: "kombo_90",
        name: "Kombo 'Soch kesish va parvarish'",
        price: "90 000 UZS",
      },
    ],
  };
  return (
    <section className="max-w-md mx-auto px-4 py-6">
      <div className="bg-white border-3 border-[#e5004f] rounded-xl shadow-lg p-6 border-t-8">
        <h3 className="text-center font-black text-base md:text-lg text-[#112233] border-b-2 border-[#e5004f] pb-2 mb-4 uppercase">
          ПРАЙС-ЛИСТ / TA'RIFLAR
        </h3>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-black text-[#e5004f] uppercase block mb-1">
              Soch kesimi
            </span>
            {priceList.kesim.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-xs py-1 border-b border-dashed border-gray-200"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="font-bold text-[#e5004f] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div>
            <span className="text-xs font-black text-[#e5004f] uppercase block mb-1">
              Bosh yuvish va parvarish
            </span>
            {priceList.yuvish.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-xs py-1 border-b border-dashed border-gray-200"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="font-bold text-[#e5004f] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div>
            <span className="text-xs font-black text-[#e5004f] uppercase block mb-1">
              Kombo xizmatlar
            </span>
            {priceList.kombo.map((item) => (
              <div key={item.id} className="flex justify-between text-xs py-1">
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="font-bold text-[#e5004f] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
