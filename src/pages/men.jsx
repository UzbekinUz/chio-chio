function MenHaircuts() {
  return (
    <div className="bg-[#E5E6E0] flex items-start py-0 px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* CHAP TOMON: MATNLAR VA TUGMA */}
        <div className="space-y-6 z-10 text-left order-2 md:order-1">
          
          {/* Asosiy Sarlavha */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2d42] leading-tight tracking-tight">
            Istalgan erkaklar <br className="hidden sm:inline" />
            soch kesimi - <span className="text-[#e5004f]">Hamyonbob narxlarda</span>
          </h1>

          {/* Tugma */}
          <div className="flex flex-col justify-center items-start">
            <button className="bg-[#e5004f] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
              Xizmatlar bilan tanishish
            </button>
            <button className="bg-[#0D263F] text-white mt-1 font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
              Book now
            </button>
          </div>
        </div>

        {/* O'NG TOMON: YAPON USLUBIDAGI KAPSULA (OVAL) RASM ELEMTI */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img src="/q3.png" alt="" />
        </div>

      </div>
    </div>
  );
}

export default MenHaircuts;