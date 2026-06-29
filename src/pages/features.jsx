import  { useState } from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

export default function Features() {
  // Karusel uchun ma'lumotlar massivi (Siz aytgan rasmlar va tavsiflar)
  const slides = [
    {
      id: 1,
      img: '/exter.JPG', // Tashqi ko'rinish uchun namuna
      title: 'Tashqi ko\'rinishimiz',
      desc: 'Toshkent shahridagi eng shinam va zamonaviy Yapon konsepsiyasiga ega salon tashqi qiyofasi.',
      tg: 'https://t.me/chio_tashkent_exterior',
      insta: 'https://instagram.com/chio_tashkent_exterior'
    },
    {
      id: 2,
      img: '/inter.JPG', // Ichki qism uchun namuna
      title: 'Salon ichki qismi',
      desc: 'Mijozlarimiz uchun maxsus sterilizatsiya hududi va qulay kutish zonasi bilan ta\'minlangan interyer.',
      tg: 'https://t.me/chio_tashkent_interior',
      insta: 'https://instagram.com/chio_tashkent_interior'
    },
    {
      id: 3,
      img: 'man.JPG', // Jamoaviy rasm uchun namuna
      title: 'Ahil jamoamiz',
      desc: 'O\'z kasbining professional ustalaridan tashkil topgan Chio-Chio Toshkent jamoasi sizning xizmatingizda.',
      tg: 'https://t.me/chio_tashkent_team',
      insta: 'https://instagram.com/chio_tashkent_team'
    }
  ];

  // Slider boshqaruvi uchun holat (Hozirgi boshlang'ich sahifa)
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ?0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#edece7] text-[#1a2e40] font-sans antialiased relative overflow-hidden pb-16">
      
      {/* Rasmda ko'ringan tepadagi oq to'lqinsimon fon (Wave Divider) */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[50px] md:rounded-b-[100px] z-0 shadow-sm" />

      <div className="max-w-6xl mx-auto px-4 pt-24 relative z-10">
        
        {/* Sarlavha qismi */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#1a2e40] uppercase tracking-tight">
            Bizning Galereya
          </h2>
          <p className="text-gray-500 font-bold text-xs md:text-sm uppercase tracking-wider mt-2">
            Salon hayoti va atmosferasidan lavhalar
          </p>
        </div>

        {/* --- MAIN SLIDER CONTAINER --- */}
        <div className="relative flex items-center justify-center px-2 md:px-8">
          
          {/* Chapga burish tugmasi (Rasmdegidek yorqin qizil doira) */}
          <button 
            onClick={prevSlide}
            className="absolute md:hidden  left-0 md:left-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#e5004f] text-white rounded-full flex items-center justify-center hover:bg-[#c40043] transition-all shadow-lg active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Kartalar paneli (Desktopda 3 ta parallel, mobilda slider holatida) */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out md:grid md:grid-cols-3 md:gap-6 md:transform-none"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div 
                  key={slide.id}
                  className="w-full flex-shrink-0 md:w-auto bg-[#e5e3db]/60 border border-gray-300/30 rounded-2xl p-5 flex flex-col items-center justify-between shadow-sm relative group"
                >
                  
                  {/* Kartaning yuqori qismidagi Chio-Chio navigator belgisi (Rasmdegidek qizil doira ichida oq arrow) */}
                  <div className="w-10 h-10 bg-[#e5004f] rounded-full flex items-center justify-center mb-4 shadow-md shadow-[#e5004f]/20">
                    <svg className="w-5 h-5 text-white fill-current transform rotate-45" viewBox="0 0 24 24">
                      <path d="M12 2L2 22l10-4 10 4z" />
                    </svg>
                  </div>

                  {/* Rasm bloki: Aynan rasmdegidek ichkariga mukammal radius berilgan */}
                  <div className="w-full h-52 overflow-hidden rounded-[2rem] shadow-inner bg-gray-200">
                    <img 
                      src={slide.img} 
                      alt={slide.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Matnli qism: 1-2 og'iz izoh */}
                  <div className="text-center my-4 px-2">
                    <h3 className="font-black text-base md:text-lg text-[#1a2e40] mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-xs md:text-[13px] text-gray-600 font-medium leading-relaxed line-clamp-3">
                      {slide.desc}
                    </p>
                  </div>

                  {/* --- PASTKI TUGMALAR: INSTAGRAM VA TELEGRAM SHADOW EFFEKTLARI BILAN --- */}
                  <div className="w-full flex items-center justify-center gap-3 mt-2">
                    
                    {/* Instagram yorqin qizil tugma */}
                    <a 
                      href={slide.insta}
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 max-w-[140px] py-2.5 bg-[#e5004f] hover:bg-[#c40043] text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 transition-all uppercase tracking-wider shadow-lg shadow-[#e5004f]/30 active:scale-95"
                    >
                       Instagram
                    </a>

                    {/* Telegram yorqin qizil tugma (Rasmda whatsapp o'rnida) */}
                    <a 
                      href={slide.tg}
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 bg-[#e5004f] hover:bg-[#c40043] text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-[#e5004f]/30 active:scale-95"
                    >
                      <Send size={15} className="mr-0.5" />
                    </a>

                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* O'ngga burish tugmasi */}
          <button 
            onClick={nextSlide}
            className="absolute md:hidden right-0 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#e5004f] text-white rounded-full flex items-center justify-center hover:bg-[#c40043] transition-all shadow-lg active:scale-95"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Mobil versiya uchun pastki nuqtachalar (Dots Indicator) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-[#e5004f]' : 'w-2 bg-gray-400/40'}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}