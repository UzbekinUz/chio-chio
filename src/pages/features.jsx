function Features() {
    return ( 
        <section className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="text-center font-black text-lg md:text-xl text-[#112233] uppercase tracking-wider mb-6">
          Nega aynan bizning yaponcha sartaroshxona?
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-[#e2e1dc] text-center shadow-sm">
            <span className="text-[10px] font-black text-[#e5004f] tracking-widest uppercase block mb-1">Navbatlarsiz</span>
            <div className="text-xl font-black text-[#112233] my-1">60K UZS</div>
            <p className="text-[11px] text-gray-500 leading-tight">Asosiy soch kesish xizmatlari sodda va shaffof yagona narx tizimida.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-[#e2e1dc] text-center shadow-sm">
            <span className="text-[10px] font-black text-[#e5004f] tracking-widest uppercase block mb-1">Tezkorlik</span>
            <div className="text-xl font-black text-[#112233] my-1">15 MIN</div>
            <p className="text-[11px] text-gray-500 leading-tight">Professional ustalardan vaqtni qadrlovchi yuqori tezlikdagi servis standarti.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-[#e2e1dc] text-center shadow-sm">
            <span className="text-[10px] font-black text-[#e5004f] tracking-widest uppercase block mb-1">Omad tizimi</span>
            <div className="text-xl font-black text-[#112233] my-1">BONUS</div>
            <p className="text-[11px] text-gray-500 leading-tight">Har bir tashrifingizda keshbek va maxsus sovg'alar yig'ilib boradi.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-[#e2e1dc] text-center shadow-sm">
            <span className="text-[10px] font-black text-[#e5004f] tracking-widest uppercase block mb-1">Sterillik</span>
            <div className="text-xl font-black text-[#112233] my-1">100%</div>
            <p className="text-[11px] text-gray-500 leading-tight">Har bir mijoz uchun alohida havo bilan tozalangan va sterillangan uskunalar.</p>
          </div>
        </div>

        {/* Global tarmoq statistikasi paneli */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-[#e2e1dc] rounded-lg mt-6 py-4 px-2 text-center shadow-sm divide-x divide-[#edece7]">
          <div>
            <span className="text-xl font-black text-[#e5004f]">800+</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Xalqaro Franchiza</span>
          </div>
          <div>
            <span className="text-xl font-black text-[#e5004f]">1 TA</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Toshkentda Filial</span>
          </div>
          <div>
            <span className="text-xl font-black text-[#e5004f]">4 TA</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Mustaqil Smart Stol</span>
          </div>
          <div>
            <span className="text-xl font-black text-[#e5004f]">&gt;150</span>
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Kundalik Mijozlar</span>
          </div>
        </div>
      </section>
     );
}

export default Features;