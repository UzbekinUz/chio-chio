import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
import axios from 'axios';
import { API_LINK, SITE_LINK } from '../cfg';

export default function ChioServicesSlider() {
    const [services, setBarber] = useState([])
  // Rasmda ko'ringan 4 ta asosiy xizmat turi ma'lumotlari
  useEffect(()=>{
    axios.get(`${API_LINK}/chiodata/barber/getAll`).then((b)=>{
        const {ok, msg, data} = b.data;
        if (ok) {
            setBarber(data);
            
            
        } else {
            console.log(msg)
        }
    })
  },[])

  const [currentIndex, setCurrentIndex] = useState(0);

  // Dekorativ nuqtachalar matritsasi (Dot Grid Component)
  const DotGrid = () => (
    <div className="grid grid-cols-2 gap-1 opacity-40">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#f9f8f6] py-16 px-4 md:px-8 font-sans antialiased text-[#1a2e40]">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Sarlavha: Перейти на страницу услуги */}
        <h2 className="text-2xl md:text-3xl font-black text-center uppercase tracking-wide mb-12 text-[#112940]">
          Перейти на страницу услуги
        </h2>

        {/* Slayder Konteyneri */}
        <div className="relative flex items-center justify-center px-4 md:px-12">
          
          {/* Chapga o'tkazish tugmasi (<) */}
          <button 
            className="absolute left-0 z-10 w-11 h-11 bg-[#f7b5cd] hover:bg-[#f59cb9] text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Kartochkalar qatori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full overflow-hidden">
            {services.map((service,key) => (
              <div 
                key={key} 
                className="relative aspect-[4/5] w-full bg-[#e3e1dc] rounded-[24px] overflow-hidden group shadow-sm flex flex-col justify-between p-6"
              >
                {/* Orqa fondagi master/model surati */}
                <img 
                  src={`${SITE_LINK}${service.photo}`} 
                  alt={service.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />

                {/* USTKI QISM: Sarlavha va Dekorativ nuqtalar */}
                <div className="relative z-10 flex justify-between items-start">
                  {/* Chap tomondagi matritsa nuqta */}
                  <div className="mt-1">
                    <DotGrid />
                  </div>
                  
                  {/* Matnli qism va Badge */}
                  <div className="text-right flex flex-col items-end max-w-[80%]">
                    
                    
                  </div>
                </div>

                {/* PASTKI QISM: Pushti tugma va burchak nuqtalari */}
                <div className="relative z-10 flex justify-between items-end w-full">
                  
                  {/* O'ng tomondagi yorqin pushti strelkali tugma */}
                  <div className="w-14 h-14 bg-[#e5004f] hover:bg-[#c40043] rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg shadow-[#e5004f]/30 transition-transform duration-300 group-hover:scale-105">
                    <MoveRight className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  {/* O'ng pastki burchakdagi dekorativ nuqtalar */}
                  <div className="mb-1">
                    <DotGrid />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* O'ngga o'tkazish tugmasi (>) */}
          <button 
            className="absolute right-0 z-10 w-11 h-11 bg-[#f7b5cd] hover:bg-[#f59cb9] text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
            onClick={() => setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

        {/* Slayder pastidagi qizil nuqtacha (Pagination indicator) */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-2 h-2 bg-[#e5004f] rounded-full"></div>
        </div>

      </div>
    </div>
  );
}