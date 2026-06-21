function Imges() {
    return ( <section className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="text-center font-black text-lg text-[#112233] uppercase tracking-wider mb-6">
          Bizning ishlarimizdan namunalar
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-300 border border-[#dcdbd6] rounded-md flex items-center justify-center text-[10px] font-bold text-gray-600 shadow-inner">
              Namuna #{i+1}
            </div>
          ))}
        </div>
      </section> );
}

export default Imges;