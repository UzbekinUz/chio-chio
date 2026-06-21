import { Award, Newspaper } from "lucide-react";

function News() {
    return ( 
        <section id="news" className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase">Yangiliklar va Aksiyalar</h2>
          <div className="h-1 w-20 bg-[#FF5A00] mx-auto mt-2"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-200">
            <div className="bg-[#FF5A00] text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
              <Newspaper className="w-10 h-10 mb-2" />
              <span className="text-xs tracking-widest uppercase font-bold">AKSIYA</span>
            </div>
            <div className="p-6 md:w-2/3">
              <span className="text-xs text-gray-400">Bugun</span>
              <h4 className="text-lg font-bold mb-2">Har 6-kesim mutlaqo BEPUL!</h4>
              <p className="text-gray-600 text-sm">Biz mijozlarimiz sadoqatini qadrlaymiz. Elektron kartangizga har bir tashrifni yozdirib boring.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-200">
            <div className="bg-[#1A1A1A] text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
              <Award className="w-10 h-10 mb-2 text-[#FF5A00]" />
              <span className="text-xs tracking-widest uppercase font-bold text-[#FF5A00]">YANGILIK</span>
            </div>
            <div className="p-6 md:w-2/3">
              <span className="text-xs text-gray-400">Kecha</span>
              <h4 className="text-lg font-bold mb-2">Yaponcha sochni quritish tizimi</h4>
              <p className="text-gray-600 text-sm">Zallarimizga sochni kesgandan so'ng qoldiqlarini vakuumli so'rib oluvchi yangi uskunalar o'rnatildi.</p>
            </div>
          </div>
        </div>
      </section>
     );
}

export default News;