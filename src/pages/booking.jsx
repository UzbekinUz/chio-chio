import { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Clock, Scissors, User, CheckCircle, ChevronRight, AlertCircle, RefreshCw, Sparkles, XCircle } from 'lucide-react';
import { API_LINK, SITE_LINK } from '../cfg';
import { useNavigate } from 'react-router-dom';

export default function BookingComponent({ client, setAuthCheck }) {
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const totalDuration = selectedServices.reduce((acc, curr) => acc + (parseInt(curr.timeTakes) || 0), 0);
  const totalPrice = selectedServices.reduce((acc, curr) => acc + (parseFloat(curr.price) || 0), 0);

  // Dastlabki yuklash
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [barberRes, serviceRes] = await Promise.all([
          axios.get(`${API_LINK}/chiodata/barber/getAll`),
          axios.get(`${API_LINK}/chiodata/service/getAll`)
        ]);
        if (barberRes.data.ok) setBarbers(barberRes.data.data);
        if (serviceRes.data.ok) setServices(serviceRes.data.data);
        
        if (client.auth) fetchMyOrders();
      } catch (err) { setError("Ma'lumotlarni yuklashda xatolik."); }
    };
    fetchData();
  }, [client.auth]);

  const fetchMyOrders = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${API_LINK}/chiodata/order/getByClient/${client.clientId}`, {
        headers: { "x-client-token": token }
      });
      if (res.data.ok) setMyOrders(res.data.data);
    } catch (err) { console.error(err); }
  };

  const toggleService = (service) => {
    setSelectedSlot(null);
    if (selectedServices.find(s => s._id === service._id)) {
      setSelectedServices(selectedServices.filter(s => s._id !== service._id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const fetchAvailableSlots = async () => {
    if (!client.auth) { navigate('/auth'); if (setAuthCheck) setAuthCheck(p => !p); return; }
    if (!selectedBarber || selectedServices.length === 0) return setError("Usta va xizmatni tanlang!");
    
    setLoadingSlots(true);
    try {
      const res = await axios.post(`${API_LINK}/chiodata/table/checkAvailable`, {
        barberId: selectedBarber._id, timeTakes: totalDuration
      });
      if (res.data.ok) { setAvailableDays(res.data.data); setStep(2); }
      else setError(res.data.msg);
    } catch (err) { setError("Server xatosi."); }
    finally { setLoadingSlots(false); }
  };

  const handleBookingSubmit = async () => {
    setSubmitLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.post(`${API_LINK}/chiodata/order/add`, {
        clientId: client.clientId,
        barberId: selectedBarber._id,
        servicesId: selectedServices.map(s => s._id),
        appointmentDate: selectedSlot.fullIsoDate
      }, { headers: { "x-client-token": token } });

      if (res.data.ok) { setStep(3); fetchMyOrders(); }
      else setError(res.data.msg);
    } catch (err) { setError("Xatolik yuz berdi."); }
    finally { setSubmitLoading(false); }
  };

  return (
    <div className="min-h-screen bg-[#edece7] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Mening Uchrashuvlarim */}
        {client.auth && (
          <div className="mb-10 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-lg font-black mb-4 flex items-center gap-2 text-[#1a2e40] uppercase">
              <Sparkles className="w-5 h-5 text-[#e5004f]" /> Mening uchrashuvlarim
            </h2>
            <div className="space-y-3">
              {myOrders.length > 0 ? myOrders.map(o => (
                <div key={o._id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div>
                    <p className="font-bold">{new Date(o.appointmentDate).toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Usta: {o.barberId?.name || "Noma'lum"}</p>
                  </div>
                  <span className="text-[10px] font-black uppercase px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Bron qilingan</span>
                </div>
              )) : <p className="text-sm text-gray-400">Hozircha faol yozuvlar yo'q.</p>}
            </div>
          </div>
        )}

        {/* Bron qilish Formasi */}
        {step !== 3 && (
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
            {step === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-black mb-4 text-[#1a2e40]">Ustani tanlang</h3>
                  <div className="space-y-3">
                    {barbers.map(b => (
                      <div key={b._id} onClick={() => setSelectedBarber(b)} className={`p-4 rounded-2xl cursor-pointer border-2 ${selectedBarber?._id === b._id ? 'border-[#e5004f] bg-rose-50' : 'border-gray-100'}`}>
                        {b.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-black mb-4 text-[#1a2e40]">Xizmatlar</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map(s => (
                      <div key={s._id} onClick={() => toggleService(s)} className={`p-4 rounded-2xl cursor-pointer border-2 ${selectedServices.find(x => x._id === s._id) ? 'border-[#e5004f] bg-rose-50' : 'border-gray-100'}`}>
                        <p className="font-bold text-sm">{s.name}</p>
                        <p className="text-xs text-[#e5004f] font-black">{s.price} UZS</p>
                      </div>
                    ))}
                  </div>
                  <button onClick={fetchAvailableSlots} className="w-full mt-6 bg-[#1a2e40] text-white py-4 rounded-2xl font-black uppercase">Davom etish</button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h3 className="font-black mb-4">Vaqtni tanlang</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {availableDays.map((d, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-2xl">
                      <p className="font-bold text-xs uppercase mb-2">{d.day}</p>
                      {d.slots.map((s, si) => (
                        <button key={si} onClick={() => setSelectedSlot({ day: d.day, time: s.time, fullIsoDate: s.fullIsoDate })} className={`w-full p-2 mb-2 rounded-lg text-xs font-bold ${selectedSlot?.fullIsoDate === s.fullIsoDate ? 'bg-[#e5004f] text-white' : 'bg-white'}`}>{s.time}</button>
                      ))}
                    </div>
                  ))}
                </div>
                <button onClick={handleBookingSubmit} className="w-full mt-6 bg-[#e5004f] text-white py-4 rounded-2xl font-black uppercase">Bronni tasdiqlash</button>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="text-center p-10 bg-white rounded-3xl shadow-xl">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-black">Muvaffaqiyatli!</h2>
            <button onClick={() => window.location.reload()} className="mt-6 bg-[#1a2e40] text-white px-8 py-3 rounded-2xl font-bold">Yangi bron</button>
          </div>
        )}
      </div>
    </div>
  );
}