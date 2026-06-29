import { useState } from 'react';
import { MapPin, Menu, X, Send, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // App.js dagi marshrutlar va sahifalarga mos keluvchi kategoriyalar
  const categories = [
    { id: '/', name: 'Bosh sahifa' },
    { id: '/booking', name: 'Bron qilish' },
  ];

  const handleTabClick = (cat) => {
    setActiveTab(cat.name);
    setIsOpen(false);
    navigate(cat.id); // Sahifaga yo'naltirish
  };

  return (
    <nav className="w-full bg-[#edece7] px-4 pt-4 pb-2 md:px-8 relative z-50">
      <div className="max-w-6xl mx-auto">
        
        {/* --- YUQORI QATOR: LOGO, REYTING VA ONLINE BRON --- */}
        <div className="flex items-center justify-between border-b border-gray-300/40 pb-4">
          
          {/* Logo va Brend Matni */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logoBlack.png" 
              alt="Chio Chio" 
              className="h-10 md:h-14 object-contain cursor-pointer" 
              onClick={() => navigate('/')}
            />
            <div className="hidden sm:block border-l border-gray-400 pl-3 text-[11px] text-gray-500 font-medium leading-tight">
              <p>Yaponcha Sifatli</p>
              <p>Toshkent filiali</p>
            </div>
          </div>

          {/* Aloqa va Qizil Bron Tugmasi */}
          <div className="flex items-center space-x-3">
            {/* Telefon raqam faqat katta ekranda chiroyli chiqadi */}
            <a href="tel:+998901234567" className="hidden lg:flex items-center gap-1 text-sm font-bold text-[#1a2e40] hover:text-[#e5004f] transition">
              <Phone size={14} /> +998 (90) 123-45-67
            </a>

            {/* Brend Qizil Rangidagi Online Bron Tugmasi (image_a86d61.png dagi kabi) */}
            <button 
              onClick={() => { setActiveTab('Bron qilish'); navigate('/booking'); }}
              className="bg-[#e5004f] text-white font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-lg hover:bg-[#c40043] transition-all transform hover:scale-[1.02] shadow-md shadow-[#e5004f]/20 uppercase tracking-wider"
            >
              Online Navbat
            </button>

            {/* Mobil qurilmalar uchun Burger Menu */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 text-[#1a2e40] hover:text-[#e5004f] transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- DESKTOP NAVIGATSIYA: KULRANG BLOK PLASHKA (Aynan rasmdegidek) --- */}
        <div className="hidden md:block mt-4 bg-[#e5e3db]/60 rounded-xl p-1 shadow-inner">
          <div className="flex justify-between items-center text-center text-xs md:text-[13px] font-bold text-[#1a2e40]">
            {categories.map((cat) => {
              const isActive = activeTab === cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabClick(cat)}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all duration-200 uppercase tracking-wide ${
                    isActive 
                      ? 'bg-white text-[#e5004f] shadow-sm font-black' 
                      : 'hover:bg-white/40 hover:text-[#e5004f]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- MOBILE DROPDOWN MENU (Mobil versiya) --- */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 mx-4 bg-white rounded-xl border border-gray-200 shadow-xl md:hidden overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col text-sm font-bold divide-y divide-gray-100">
              {categories.map((cat) => {
                const isActive = activeTab === cat.name;
                return (
                  <span
                    key={cat.id}
                    onClick={() => handleTabClick(cat)}
                    className={`px-5 py-3.5 cursor-pointer text-left transition-colors flex justify-between items-center ${
                      isActive ? 'text-[#e5004f] bg-red-50/60 border-l-4 border-[#e5004f]' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat.name}
                  </span>
                );
              })}
              
              {/* Mobil menyu ichidagi ijtimoiy tarmoq havolalari */}
              <div className="p-4 bg-gray-50 flex justify-around items-center">
                <a href="https://t.me/your_telegram" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#e5004f] flex items-center gap-1 text-xs">
                  <Send size={16} /> Telegram
                </a>
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#e5004f] flex items-center gap-1 text-xs">
                   Instagram
                </a>
                <a href="tel:+998901234567" className="text-gray-600 hover:text-[#e5004f] flex items-center gap-1 text-xs">
                  <Phone size={16} /> Aloqa
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;