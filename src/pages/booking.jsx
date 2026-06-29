import { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Clock, Scissors, User, CheckCircle, ChevronRight, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
import { API_LINK } from '../cfg'; // API havola App.js dagi kabi cfg dan olindi

export default function BookingComponent({ client, setAuthCheck }) {
  // Data States
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);

  // Selection States
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null); // { day, time, fullIsoDate }

  // UI Status States
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Barber & Service, 2: Time Slot, 3: Success
  const [error, setError] = useState('');

  // Jami vaqt va narx
  const totalDuration = selectedServices.reduce((acc, curr) => acc + (parseInt(curr.timeTakes) || 0), 0);
  const totalPrice = selectedServices.reduce((acc, curr) => acc + (parseFloat(curr.price) || 0), 0);

  // Dastlabki ma'lumotlarni yuklash
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [barberRes, serviceRes] = await Promise.all([
          axios.get(`${API_LINK}/chiodata/barber/getAll`),
          axios.get(`${API_LINK}/chiodata/service/getAll`)
        ]);
        
        if (barberRes.data.ok) setBarbers(barberRes.data.data || []);
        if (serviceRes.data.ok) setServices(serviceRes.data.data || []);
      } catch (err) {
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
      }
    };
    fetchData();
  }, []);

  // Xizmat tanlanganda yoki o'chirilganda ishlovchi funksiya
  const toggleService = (service) => {
    setSelectedSlot(null);
    if (selectedServices.find(s => s._id === service._id)) {
      setSelectedServices(selectedServices.filter(s => s._id !== service._id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Bo'sh slotlarni yuklash
  const fetchAvailableSlots = async () => {
    if (!client || !client.auth) {
      setError("Bron qilish uchun iltimos avval tizimga kiring!");
      if (setAuthCheck) setAuthCheck(prev => !prev);
      return;
    }

    if (!selectedBarber || selectedServices.length === 0) {
      setError("Iltimos, sartarosh va kamida bitta xizmatni tanlang!");
      return;
    }

    setLoadingSlots(true);
    setError('');
    try {
      const response = await axios.post(`${API_LINK}/chiodata/table/checkAvailable`, {
        barberId: selectedBarber._id,
        timeTakes: totalDuration
      });

      if (response.data.ok) {
        setAvailableDays(response.data.data);
        setStep(2);
      } else {
        setError(response.data.msg);
      }
    } catch (err) {
      setError("Bo'sh vaqtlarni olishda server xatoligi yuz berdi.");
    } finally {
      setLoadingSlots(false);
    }
  };

  // Bron qilishni yakunlash
  const handleBookingSubmit = async () => {
    if (!selectedSlot) return;

    setSubmitLoading(true);
    setError('');
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.post(`${API_LINK}/chiodata/order/add`, {
        clientId: client.clientId,
        barberId: selectedBarber._id,
        servicesId: selectedServices.map(s => s._id),
        appointmentDate: selectedSlot.fullIsoDate
      }, {
        headers: { "x-client-token": token }
      });

      if (response.data.ok) {
        setStep(3);
      } else {
        setError(response.data.msg);
      }
    } catch (err) {
      setError("Buyurtma berishda xatolik yuz berdi.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedBarber(null);
    setSelectedServices([]);
    setSelectedSlot(null);
    setStep(1);
    setError('');
  };

  return (
    <div className="relative min-h-screen bg-[#edece7]">
      
      {/* ─── XIRA OYNA (GLASSMORPHISM OVERLAY) QATLAMI ─── */}
      <div className="absolute inset-0 z-50 backdrop-blur-md bg-[#edece7]/40 flex items-center justify-center p-4 select-none">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl border-2 border-white rounded-3xl p-8 text-center shadow-2xl shadow-[#1a2e40]/10 flex flex-col items-center justify-center transform transition-all duration-300">
          
          {/* Pulsatsiya qiluvchi Chio-Chio uslubidagi logotip/belgi */}
          <div className="w-16 h-16 bg-[#e5004f] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#e5004f]/40 animate-pulse relative">
            <Sparkles className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a2e40] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1a2e40]"></span>
            </span>
          </div>

          {/* Sarlavha */}
          <h2 className="text-2xl md:text-3xl font-black text-[#1a2e40] uppercase tracking-tight mb-3">
            Tez orada tayyor bo'ladi!
          </h2>

          {/* Tavsif matni */}
          <p className="text-sm text-gray-600 font-semibold leading-relaxed max-w-xs">
            Onlayn navbat olish tizimi hozirda sinovdan o'tkazilmoqda. Tez kunlarda eng sevimli xizmatlaringizni shu yerning o'zida bron qilish imkoniyati ochiladi!
          </p>

          {/* Dekorativ brend chizig'i */}
          <div className="w-24 h-1.5 bg-[#e5004f] rounded-full mt-6 opacity-80" />
        </div>
      </div>

      {/* ─── ASOSIY KONTENT (Orqa fonda xiralashgan holda ko'rinadi, pointer-events-none orqali yopilgan) ─── */}
      <div className="text-[#1a2e40] font-sans antialiased p-4 md:p-8 selection:bg-[#e5004f] selection:text-white pointer-events-none select-none">
        <div className="max-w-5xl mx-auto">
          
          {/* Sarlavha qismi */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#1a2e40] uppercase">
              Online Navbatga Yozilish
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base font-medium">
              Sartarosh va kerakli xizmatlarni tanlab, o'zingizga qulay vaqtni belgilang
            </p>
          </header>

          {/* Xatolik xabari */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-[#e5004f] rounded-r-xl flex items-center gap-3 text-red-900 text-sm shadow-sm">
              <AlertCircle className="w-5 h-5 text-[#e5004f] shrink-0" />
              <p className="font-semibold">{error}</p>
            </div>
          )}

          {/* STEP 1: Sartarosh va Xizmatlarni Tanlash */}
          {step === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Sartaroshlar Ro'yxati */}
              <div className="lg:col-span-1 bg-white border border-gray-300/60 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-black mb-4 flex items-center gap-2 text-[#1a2e40] uppercase tracking-wide border-b border-gray-100 pb-2">
                  <User className="w-5 h-5 text-[#e5004f]" /> Sartaroshlar
                </h2>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {barbers.map((barber) => (
                    <div
                      key={barber._id}
                      onClick={() => { setSelectedBarber(barber); setSelectedSlot(null); }}
                      className={`p-4 rounded-xl cursor-pointer transition-all border-2 flex items-center gap-3 ${
                        selectedBarber?._id === barber._id
                          ? 'bg-[#e5004f]/5 border-[#e5004f] shadow-sm'
                          : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-colors ${
                        selectedBarber?._id === barber._id ? 'bg-[#e5004f] text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {barber.name?.charAt(0).toUpperCase() || 'B'}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm md:text-base text-[#1a2e40]">{barber.name || barber.phone}</h3>
                        <p className="text-xs text-gray-500 font-medium">Chio-Chio ustasi</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Xizmatlar Ro'yxati */}
              <div className="lg:col-span-2 bg-white border border-gray-300/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-black mb-4 flex items-center gap-2 text-[#1a2e40] uppercase tracking-wide border-b border-gray-100 pb-2">
                    <Scissors className="w-5 h-5 text-[#e5004f]" /> Xizmat turlari
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {services.map((service) => {
                      const isSelected = selectedServices.some(s => s._id === service._id);
                      return (
                        <div
                          key={service._id}
                          onClick={() => toggleService(service)}
                          className={`p-4 rounded-xl cursor-pointer transition-all border-2 flex flex-col justify-between h-28 ${
                            isSelected
                              ? 'bg-[#e5004f]/5 border-[#e5004f]'
                              : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-bold text-sm text-[#1a2e40] line-clamp-2 leading-tight">{service.name}</h3>
                            <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
                              isSelected ? 'bg-[#e5004f] border-[#e5004f]' : 'border-gray-300 bg-white'
                            }`}>
                              {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-xs mt-2 border-t border-gray-200/60 pt-2">
                            <span className="flex items-center gap-1 font-semibold text-gray-500">
                              <Clock className="w-3.5 h-3.5 text-[#e5004f]" /> {service.timeTakes} min
                            </span>
                            <span className="font-extrabold text-[#e5004f] text-sm">
                              {parseFloat(service.price).toLocaleString()} UZS
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 1 Pastki Panel */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase">Tanlandi: {selectedServices.length} xizmat</p>
                    <p className="text-xl font-black text-[#1a2e40]">{totalPrice.toLocaleString()} UZS <span className="text-xs text-gray-500 font-normal">({totalDuration} daqiqa)</span></p>
                  </div>
                  <button
                    disabled={!selectedBarber || selectedServices.length === 0 || loadingSlots}
                    onClick={fetchAvailableSlots}
                    className="w-full sm:w-auto px-6 py-3 bg-[#e5004f] hover:bg-[#c40043] text-white font-black rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase text-xs tracking-wider shadow-md shadow-[#e5004f]/20"
                  >
                    {loadingSlots ? <RefreshCw className="w-5 h-5 animate-spin" /> : <>Vaqtni Tanlash <ChevronRight className="w-5 h-5" /></>}
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2 va 3 mantiqlari o'z holaticha qoldi... */}
          {step === 2 && (
            <div className="bg-white border border-gray-300/60 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-lg font-black flex items-center gap-2 text-[#1a2e40] uppercase tracking-wide">
                  <Calendar className="w-5 h-5 text-[#e5004f]" /> Navbat Vaqtini Tanlang
                </h2>
                <button onClick={() => setStep(1)} className="text-xs md:text-sm font-bold text-[#e5004f] hover:underline">
                  &larr; Sartarosh va xizmatlarni o'zgartirish
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {availableDays.map((dayData, dIndex) => (
                  <div key={dIndex} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col">
                    <h3 className="font-extrabold text-sm text-[#1a2e40] border-b-2 border-gray-200 pb-2 mb-3 text-center capitalize tracking-wide">
                      {dayData.day}
                    </h3>
                    {dayData.slots.length === 0 ? (
                      <p className="text-xs text-gray-400 text-center my-auto py-6 font-medium">Bo'sh vaqt qolmagan.</p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                        {dayData.slots.map((slot, sIndex) => {
                          const isSlotSelected = selectedSlot?.fullIsoDate === slot.fullIsoDate;
                          return (
                            <button
                              key={sIndex}
                              onClick={() => setSelectedSlot({ day: dayData.day, time: slot.time, fullIsoDate: slot.fullIsoDate })}
                              className={`py-2 text-xs font-bold rounded-lg transition-all border-2 text-center ${
                                isSlotSelected
                                  ? 'bg-[#e5004f] border-[#e5004f] text-white shadow-sm'
                                  : 'bg-white border-gray-200 hover:border-[#e5004f]/40 text-[#1a2e40]'
                              }`}
                            >
                              {slot.time}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200">
                <div className="text-sm space-y-1 text-center md:text-left font-medium text-gray-600">
                  <p>Sartarosh: <span className="text-[#1a2e40] font-bold">{selectedBarber?.name}</span></p>
                  <p>Kutilayotgan vaqt: <span className="text-[#1a2e40] font-bold">{totalDuration} daqiqa</span></p>
                  {selectedSlot && (
                    <p className="text-[#e5004f] font-black uppercase text-xs tracking-wider mt-1">
                      Belgilangan vaqt: <span className="underline capitalize">{selectedSlot.day} • {selectedSlot.time}</span>
                    </p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center">
                  <div className="text-center sm:text-right">
                    <span className="text-xs text-gray-500 font-bold uppercase block">Jami to'lov:</span>
                    <span className="text-2xl font-black text-[#e5004f]">{totalPrice.toLocaleString()} UZS</span>
                  </div>
                  <button
                    disabled={!selectedSlot || submitLoading}
                    onClick={handleBookingSubmit}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#e5004f] hover:bg-[#c40043] text-white font-black rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs tracking-wider uppercase shadow-md shadow-[#e5004f]/20"
                  >
                    {submitLoading ? <RefreshCw className="w-5 h-5 animate-spin" /> : "BRON QILISHNI TASDIQLASH"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="max-w-md mx-auto bg-white border border-gray-300/60 rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-50 border-2 border-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-[#1a2e40] mb-2 uppercase tracking-tight">Muvaffaqiyatli Yakunlandi!</h2>
              <p className="text-sm text-gray-600 mb-6 font-medium">
                Siz <span className="text-[#1a2e40] font-bold">{selectedBarber?.name}</span> ustasiga <span className="text-[#e5004f] font-bold capitalize">{selectedSlot?.day} soat {selectedSlot?.time}</span>ga muvaffaqiyatli onlayn navbat oldingiz.
              </p>
              <button onClick={resetForm} className="w-full py-3 bg-[#1a2e40] hover:bg-[#111e2b] text-white font-black rounded-xl transition-colors text-xs uppercase tracking-wider">
                Yangi sahifa ochish
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}