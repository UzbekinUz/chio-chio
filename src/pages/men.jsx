function MenHaircuts() {
  return (
    <div className="bg-[#edece7] min-h-[calc(100vh-80px)] flex items-center py-12 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* CHAP TOMON: MATNLAR VA TUGMA */}
        <div className="space-y-6 z-10 text-left order-2 md:order-1">
          {/* Kichik info xatchop */}
          <div className="inline-block bg-white text-gray-800 font-bold text-xs px-4 py-2 rounded-full shadow-sm">
            Chio Chio Rofatda / Toshkent
          </div>
          
          {/* Asosiy Sarlavha */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2d42] leading-tight tracking-tight">
            Istalgan bazaviy erkaklar <br className="hidden sm:inline" />
            soch kesimi - <span className="text-[#e5004f]">Hamyonbob narxlarda</span>
          </h1>

          {/* Tugma */}
          <div>
            <button className="bg-[#e5004f] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
              Xizmatlar bilan tanishish
            </button>
            <button className="bg-[#e5004f] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
              Bron qilish
            </button>
          </div>

          {/* Izoh (Yulduzcha ostidagi matn) */}
          <p className="text-xs text-gray-500 max-w-md leading-relaxed pt-4 border-t border-[#dcdbd6]">
            * — sochni murakkab shaklda kesish, soqolga dizayn berishi yoki qo'shimcha parvarish xizmatlari, ishning qiyinligi hamda sarflanadigan vaqtga qarab narxi farq qilishi mumkin. Batafsil ma'lumot praysda ko'rsatilgan.
          </p>
        </div>

        {/* O'NG TOMON: YAPON USLUBIDAGI KAPSULA (OVAL) RASM ELEMTI */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-[280px] h-[480px] sm:w-[320px] sm:h-[550px] md:w-[340px] md:h-[580px]">
            
            {/* Orqadagi qizil oval fon */}
            <div className="absolute inset-0 bg-[#e5004f] rounded-[150px] shadow-lg"></div>
            
            {/* Ichki oq ramka (Border) */}
            <div className="absolute inset-3 border-2 border-white rounded-[140px] z-10 pointer-events-none"></div>
            
            {/* Model Rasmi (Oval ichiga joylashtirilgan va tagi chiroyli kesilgan effekt) */}
            <div className="absolute inset-0 rounded-[150px] overflow-hidden flex items-end justify-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" 
                alt="Erkaklar soch kesimi" 
                className="w-full h-[92%] object-cover object-center scale-105 transition-transform duration-500 hover:scale-110"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Orqa fondagi yaponcha estetik burchak bezagi (oq yulduzcha) */}
      <div className="absolute bottom-6 right-8 text-white opacity-20 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      </div>
    </div>
  );
}

export default MenHaircuts;