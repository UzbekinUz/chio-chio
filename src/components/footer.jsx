import { Inbox } from 'lucide-react';

function Footer() {
  return (
    <footer 
      className="relative border-t border-[#dcdbd6] bg-[#edece7] py-12 px-4 md:px-8 overflow-hidden text-[#1a2d42]"
    >
      {/* 
        Chap tomondagi sartaroshxona xira fon rasmi effekti (Image overlay).
        Bu rasm orqa fonda chiroyli xira bo'lib turadi.
      */}
      <div 
        className="absolute left-0 bottom-0 top-0 w-full md:w-1/3 opacity-[0.07] bg-cover bg-no-repeat pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600')" }}
      ></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        {/* 1. LOGO VA BREND QISMI */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center">
            <img src="/logoBlack.png" alt="logo" className="h-14 object-contain" />
          </div>
          <div className="text-xs md:text-sm font-semibold text-gray-600 leading-tight">
            <p>Sartaroshxonalar tarmog'i</p>
            <p className="font-bold text-[#1a2d42]">Chio Chio • Toshkent</p>
          </div>
        </div>

        {/* 2. IJTIMOIY TARMOQLAR (Bizning ijtimoiy tarmoqlar) */}
        <div className="space-y-4">
          <h4 className="text-sm font-black uppercase tracking-wider text-[#1a2d42]">
            Bizning ijtimoy tarmoqlar
          </h4>
          
          <div className="flex space-x-2">
            {/* Telegram */}
            <a href="https://t.me/your_telegram" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#e5004f] text-white rounded-full flex items-center justify-center hover:opacity-90 transition shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/your_instagram" target="_blank" rel="noreferrer" className="w-8 h-8 bg-[#e5004f] text-white rounded-full flex items-center justify-center hover:opacity-90 transition shadow-sm">
              <Inbox size={16} />
            </a>
          </div>

          <p className="text-[10px] text-gray-400 leading-normal max-w-[240px]">
            * Instagram ijtimoiy tarmog'i O'zbekiston hududida amaldagi qonunchilik doirasida va ko'ngilochar kontent uchun ishlatiladi.
          </p>
        </div>

        {/* 3. HUQUQIY MA'LUMOTLAR (Huquqiy ma'lumotlar qismi) */}
        <div className="space-y-4 text-xs md:text-sm text-gray-600">
          <h4 className="text-sm font-black uppercase tracking-wider text-[#1a2d42]">
            Huquqiy ma'lumotlar
          </h4>
          <div className="pt-2 space-y-1 text-[11px] md:text-xs text-gray-500 leading-relaxed">
            <p className="font-bold text-[#1a2d42]">MChJ "CHIO-CHIO TASHKENT"</p>
            <p>STIR (INN): 309988776</p>
            <p>Yuridik manzili: Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi, 15-uy</p>
            <p>Pochta: <a href="mailto:chiochio.tashkent@gmail.com" className="underline hover:text-[#e5004f]">chiochio.tashkent@gmail.com</a></p>
          </div>
        </div>

      </div>

      {/* PASTI: MUALLIFLIK HUQUQI */}
      <div className="max-w-6xl mx-auto border-t border-[#dcdbd6] mt-10 pt-6 text-center text-[11px] text-gray-400 relative z-10">
        © 2026 CHIO-CHIO Tashkent. Barcha huquqlar himoyalangan. Franchiza asosida ishlaydi.
      </div>
    </footer>
  );
}

export default Footer;