import { useState } from 'react';
// Lucide ikonkalari (Telegram, Instagram va Location uchun)
import {  MapPin, Menu, X, Inbox } from 'lucide-react';

function Navbar({setActiveTab, activeTab}) {
  // Tanlangan kategoriyani saqlash uchun state (qiymat qaytarish uchun)
  
  // Mobil versiyada dropdown menuni ochish/yopish uchun state
  const [isOpen, setIsOpen] = useState(false);

  // Kategoriyalar ro'yxati
  const categories = [
    { id: 'home', name: 'Bosh sahifa' },
    { id: 'women', name: 'Ayollar soch kesimi' },
    { id: 'men', name: 'Erkaklar soch kesimi' }
  ];

  // Kategoriya bosilganda ishlaydigan funksiya
  const handleTabClick = (categoryName) => {
    setActiveTab(categoryName);
    setIsOpen(false); // Mobil menuda biror narsa bosilsa, dropdown yopiladi
    console.log("Tanlangan kategoriya:", categoryName); // Qiymatni konsolga chiqarish yoki API'ga uzatish mumkin
  };

  return (
    <nav className="bg-[#edece7] border-b border-[#dcdbd6] px-4 py-4 md:px-8 relative z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        
        {/* Logo qismi */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-3">
            <div>
              <div className="flex items-center justify-start">
                <img src="/logoBlack.png" alt="logo" className="h-12 md:h-16 object-contain" />
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                Yapon Sartaroshxonasi • Toshkent
              </p>
            </div>
          </div>

          {/* Mobil qurilmalar uchun Burger Menu (Dropdown boshqaruvchisi) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-700 hover:text-[#e5004f] transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Aloqa va Ijtimoiy tarmoqlar */}
        <div className="flex items-center justify-between md:justify-end space-x-4 w-full md:w-auto">
          {/* Ijtimoiy tarmoqlar (Ikonkalar qo'shildi) */}
          <div className="flex space-x-2">
            {/* Telegram - Eski Logotip o'rniga Custom SVG orqali chiroyli chiqadi */}
            <a href="https://t.me/your_telegram" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#e5004f] text-white rounded-full opacity-85 flex items-center justify-center hover:opacity-100 transition shadow-sm">
              <svg size={16} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/your_instagram" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#e5004f] text-white rounded-full opacity-85 flex items-center justify-center hover:opacity-100 transition shadow-sm">
              <Inbox size={16} />
            </a>
            {/* Location */}
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#e5004f] text-white rounded-full opacity-85 flex items-center justify-center hover:opacity-100 transition shadow-sm">
              <MapPin size={16} />
            </a>
          </div>
          
          {/* Telefon raqam */}
          <a href="tel:+998901234567" className="bg-[#e5004f] text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-opacity-90 transition shadow-sm whitespace-nowrap">
            +998 (90) 123-45-67
          </a>
        </div>
      </div>

      {/* --- DESKTOP NAVIGATION (Katta ekranlar uchun parallel ko'rinish) --- */}
      <div className="hidden md:block max-w-6xl mx-auto mt-4 bg-white rounded-md border border-[#e0dfda] overflow-x-auto shadow-sm">
        <nav className="flex whitespace-nowrap min-w-max text-center text-xs md:text-sm font-bold">
          {categories.map((cat, index) => {
            const isActive = activeTab === cat.name;
            return (
              <span
                key={cat.id}
                onClick={() => handleTabClick(cat.name)}
                className={`flex-1 px-4 py-2.5 cursor-pointer transition-colors duration-200
                  ${isActive ? 'text-[#e5004f] border-b-2 border-[#e5004f]' : 'text-gray-600 hover:text-[#e5004f]'} 
                  ${index !== categories.length - 1 ? 'border-r border-[#edf0f2]' : ''}`}
              >
                {cat.name}
              </span>
            );
          })}
        </nav>
      </div>

      {/* --- MOBILE DROPDOWN MENU (Kichik ekranlar uchun) --- */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1 mx-4 bg-white rounded-md border border-[#e0dfda] shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col text-sm font-bold divide-y divide-[#edf0f2]">
            {categories.map((cat) => {
              const isActive = activeTab === cat.name;
              return (
                <span
                  key={cat.id}
                  onClick={() => handleTabClick(cat.name)}
                  className={`px-4 py-3 cursor-pointer text-left transition-colors
                    ${isActive ? 'text-[#e5004f] bg-red-50 pl-6 border-l-4 border-[#e5004f]' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {cat.name}
                </span>
              );
            })}
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;