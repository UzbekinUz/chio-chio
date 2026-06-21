function Location() {
    return ( 
        <section id="navigation" className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-300">
        <h3 className="text-center font-black text-base text-[#112233] uppercase tracking-wider mb-4">
          Biz haqimizda fikrlar va navigatsiya
        </h3>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <span className="block bg-[#ff5722] text-white text-xs font-bold py-1.5 rounded-md mb-2">Yandex Xarita</span>
            <div className="text-[11px] text-gray-600 font-medium">Reyting: 4.9 • 320 fikr</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <span className="block bg-[#2d72d9] text-white text-xs font-bold py-1.5 rounded-md mb-2">2GIS Navigatsiya</span>
            <div className="text-[11px] text-gray-600 font-medium">Top premium jamoa</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <span className="block bg-[#4caf50] text-white text-xs font-bold py-1.5 rounded-md mb-2">Google Maps</span>
            <div className="text-[11px] text-gray-600 font-medium">Toshkent markazida</div>
          </div>
        </div>
      </section>
     );
}

export default Location;