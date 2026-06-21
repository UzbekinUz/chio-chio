import { CheckCircle } from "lucide-react";
import { useState } from "react";

function Booking() {
  const [selectedService, setSelectedService] = useState("erkak_60");
  const [selectedDate, setSelectedDate] = useState("2026-06-20");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [selectedTable, setSelectedTable] = useState(2); // Rasmdagi kabi default tanlangan
  const [clientName, setClientName] = useState("Shaxzod");
  const [clientPhone, setClientPhone] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  // Rasmlarga mos keladigan narxlar ro'yxati (Ta'riflar)
  

  // 4 ta stolning real-vaqt rejimini simulyatsiya qiluvchi ma'lumotlar struktursi
  // Tanlangan vaqtga qarab stollar holati o'zgaradi
  const tablesData = [
    {
      id: 1,
      name: "Stol #1",
      barber: "Sardor",
      status: "busy",
      note: "Band (14:00 gacha)",
    },
    {
      id: 2,
      name: "Stol #2",
      barber: "Jamshid",
      status: "free",
      note: "Siz tanladingiz",
    },
    {
      id: 3,
      name: "Stol #3",
      barber: "Nigora",
      status: "free",
      note: "Bo'sh (Erkin)",
    },
    {
      id: 4,
      name: "Stol #4",
      barber: "Dilshod",
      status: "free",
      note: "Bo'sh (Erkin)",
    },
  ];

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!clientName || !selectedTable) return;
    setIsBooked(true);
  };

  return (
    <section id="booking-section" className="max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-center font-black text-lg md:text-xl text-[#112233] uppercase tracking-wider mb-6">
        Smart Smart-Stol band qilish tizimi
      </h3>

      <div className="bg-white border border-[#dcdbd6] rounded-xl shadow-md p-5 md:p-8">
        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h4 className="text-2xl font-bold text-gray-800">
              Muvaffaqiyatli band qilindi!
            </h4>
            <p className="text-sm text-gray-600 max-w-sm mx-auto">
              Sizning buyurtmangiz muvaffaqiyatli qabul qilindi.{" "}
              <strong>Stol #{selectedTable}</strong> tanlangan vaqtda sizni
              kutmoqda.
            </p>
            <button
              onClick={() => setIsBooked(false)}
              className="bg-[#e5004f] text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              Qayta band qilish
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmitBooking}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Form Input maydonlari */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                  Xizmatni tanlang
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#fcfbf9] border border-gray-300 rounded-md p-2 text-sm focus:border-[#e5004f] outline-none"
                >
                  <option value="tekis_40">
                    Tekislash va oddiy shakl — 40 000 UZS
                  </option>
                  <option value="erkak_60">
                    Asosiy yaponcha kesim (Erkaklar) — 60 000 UZS
                  </option>
                  <option value="ayol_80">
                    Ayollar premium soch kesimi — 80 000 UZS
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                  Sana va vaqt slotini tanlang
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#fcfbf9] border border-gray-300 rounded-md p-2 text-xs focus:border-[#e5004f] outline-none"
                  />
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-[#fcfbf9] border border-gray-300 rounded-md p-2 text-xs focus:border-[#e5004f] outline-none"
                  >
                    <option value="09:00">09:00 - 10:00</option>
                    <option value="11:00">11:00 - 12:00</option>
                    <option value="14:00">14:00 - 15:00</option>
                    <option value="16:00">16:00 - 17:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                  Shaxsiy ma'lumotlar
                </label>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#fcfbf9] border border-gray-300 rounded-md p-2 text-sm focus:border-[#e5004f] outline-none mb-2"
                  required
                />
                <input
                  type="tel"
                  placeholder="+998 (99) 000-00-00"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-[#fcfbf9] border border-gray-300 rounded-md p-2 text-sm focus:border-[#e5004f] outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#e5004f] text-white font-black py-3 rounded-xl hover:bg-opacity-95 text-sm uppercase tracking-wider transition shadow-sm"
              >
                Ushbu Smart Stolni band qilish
              </button>
            </div>

            {/* O'ng tarafdagi interaktiv 4 ta stol grafik joylashuvi */}
            <div className="bg-[#fcfbf9] p-4 rounded-xl border border-gray-200 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 text-center mb-4">
                  Zal sxemasi va stollar holati
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {tablesData.map((table) => {
                    const isBusy = table.status === "busy";
                    const isSelected = selectedTable === table.id;

                    return (
                      <div
                        key={table.id}
                        onClick={() => !isBusy && setSelectedTable(table.id)}
                        className={`p-4 rounded-lg border text-center transition relative cursor-pointer
                            ${isBusy ? "bg-red-50 border-red-200 opacity-75 cursor-not-allowed" : ""}
                            ${!isBusy && !isSelected ? "bg-green-50 border-green-200 hover:border-[#e5004f]" : ""}
                            ${isSelected ? "bg-[#e5004f] border-[#e5004f] text-white shadow-md transform scale-105" : ""}
                          `}
                      >
                        <div className="font-black text-sm md:text-base">
                          {table.name}
                        </div>
                        <div
                          className={`text-[11px] ${isSelected ? "text-white opacity-90" : "text-gray-500"}`}
                        >
                          Usta: {table.barber}
                        </div>
                        <span
                          className={`inline-block text-[9px] font-bold uppercase px-2 py-0.5 rounded mt-2
                            ${isBusy ? "bg-red-200 text-red-800" : ""}
                            ${!isBusy && !isSelected ? "bg-green-200 text-green-800" : ""}
                            ${isSelected ? "bg-white text-[#e5004f]" : ""}
                          `}
                        >
                          {isBusy
                            ? table.note
                            : isSelected
                              ? "Siz tanladingiz"
                              : "Bo'sh (Erkin)"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between text-[10px] text-gray-500 font-bold">
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-1 inline-block"></span>{" "}
                  BO'SH
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-red-400 rounded-full mr-1 inline-block"></span>{" "}
                  BAND
                </div>
                <div className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-[#e5004f] rounded-full mr-1 inline-block"></span>{" "}
                  TANLANGAN
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Booking;
